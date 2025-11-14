import { err } from "inngest/types";
import { streamClient, chatClient } from "../lib/stream.js";
import Session from "../models/Session.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !difficulty) {
      res.status(400).json({
        message: "Problem and difficulty are required to create a session",
      });
    }

    // generate a unique id for vide call

    const callId = `session-${Date.now()}_${Math.random()
      .toString(36)
      .substring(7)}`;
    const session = new Session({ problem, difficulty, host: userId, callId });

    // create a stream video call
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() },
      },
    });

    // chat messages

    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} Session`,
      created_by_id: clerkId,
      members: [clerkId],
    });
    await channel.create();
    res.status(201).json({ session });
  } catch (error) {
    console.error("Error creating session", error);
  }
}
export async function getActiveSessions(req, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name clerkId profileImage email")
      .sort({ created_At: -1 })
      .limit(20);
  } catch (error) {
    console.error("Error fetching active sessions", error);
  }
}
export async function getMyRecentSessions(_, res) {
  try {
    const userId = req.use._id;
    const sessions = await Session.find({
      $or: [{ host: userId }, { participant: userId }],
    }).sort({ created_At: -1 }.limit(20));
  } catch (error) {
    console.error("Error fetching recent sessions", err);
    res.status(500).json({ message: "Internal server error" });
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
  } catch (error) {
    console.error("Error fetching sessions id", error);
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.userId;
    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }
    // check if session is already full
    if (session.participant) {
      return res.status(400).json({ message: "Session is already full" });
    }

    session.participant = userId;
    await session.save();

    // add user to stream video call/channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);
    res.status(200).json({ session });
  } catch (error) {
    console.error("Error on joining session", error);
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.use._id;
    const session = await Session.findById(id);
    if (!session) {
      res.status(404).json({ message: "Session not found" });
    }
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only host can end the session" });
    }
    if (session.status === "completed") {
      res.status(400).json({ message: "Session is already ended" });
    }

    session.status === "completed";
    await session.save();
		
		// delete stream video call
		const call= streamClient.video.call("default",session.callId);
		await call.delete({hard:true});

		// delete the chat channel
		const channel=chatClient.channel("messaging",session.callId);
		await channel.delete();

		res.status(200).json({ message: "Session ended successfully" });
  }
	 catch (error) {
    console.error("Error on ending session", error);
  }
}
