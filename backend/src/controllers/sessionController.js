import {
  streamClient,
  chatClient,
  isStreamConfigured,
} from "../lib/stream.js";
import Session from "../models/Session.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      return res.status(400).json({
        message: "Problem and difficulty are required to create a session",
      });
    }

    // generate a unique id for vide call

    const callId = `session-${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;
    const session = new Session({
      problem,
      difficulty,
      host: userId,
      callId,
    });

    if (isStreamConfigured) {
      try {
        await streamClient.video.call("default", callId).getOrCreate({
          data: {
            created_by: clerkId,
            custom: { problem, difficulty, sessionId: session._id.toString() },
          },
        });

        const channel = chatClient.channel("messaging", callId, {
          name: `${problem} Session`,
          created_by_id: clerkId,
          members: [clerkId],
        });
        await channel.create();
        session.streamReady = true;
      } catch (streamError) {
        console.error("Stream setup failed, continuing without video/chat", {
          callId,
          error: streamError,
        });
      }
    } else {
      console.warn(
        "Stream not configured; skipping video call/channel creation for",
        callId
      );
    }
    await session.save();
    return res.status(201).json({ session });
  } catch (error) {
    console.error("Error creating session", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
export async function getActiveSessions(req, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name clerkId profileImage email")
      .sort({ createdAt: -1 })
      .limit(20);
    return res.status(200).json({ sessions });
  } catch (error) {
    console.error("Error fetching active sessions", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;
    const sessions = await Session.find({
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);
    return res.status(200).json({ sessions });
  } catch (error) {
    console.error("Error fetching recent sessions", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
export async function getSessionById(req, res) {
  try {
    const { id } = req.params;
    const session = await Session.findById(id)
      .populate("host", "name clerkId profileImage email")
      .populate("participant", "name clerkId profileImage email");
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }
      return res.status(200).json({ session });
  } catch (error) {
    console.error("Error fetching sessions id", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }
		if(session.status!=="active"){
			return res.status(400).json({message:"Cannot join a completed session"})
		}
		if (session.host.toString()===userId.toString()) {
			return res.status(400).json({message:"Host cannot join as participant"});
		}
    // check if session is already full
    if (session.participant) {
      return res.status(409).json({ message: "Session is already full" });
    }

    session.participant = userId;
    await session.save();

    if (isStreamConfigured && session.streamReady) {
      try {
        const channel = chatClient.channel("messaging", session.callId);
        await channel.addMembers([clerkId]);
      } catch (streamError) {
        console.error("Stream add member failed", {
          sessionId: session._id,
          error: streamError,
        });
      }
    }
    return res.status(200).json({ session });
  } catch (error) {
    console.error("Error on joining session", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const session = await Session.findById(id);
    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only host can end the session" });
    }
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already ended" });
    }

		if(isStreamConfigured && session.streamReady){
      try{
        const call= streamClient.video.call("default",session.callId);
        await call.delete({hard:true});

        const channel=chatClient.channel("messaging",session.callId);
        await channel.delete();
      }catch(streamError){
        console.error("Stream cleanup failed",{
          sessionId:session._id,
          error:streamError
        });
      }
		}

    session.status = "completed";
    await session.save();
    return res.status(200).json({ message: "Session ended successfully" });
  }
	 catch (error) {
    console.error("Error on ending session", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
