import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;

    const initCall = async () => {
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;

      try {
        const { token, userId, userName, userImage } = await sessionApi.getStreamToken();

        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        setStreamClient(client);

        videoCall = client.call("default", session.callId);
        // Join without enabling camera/mic by default (optional media)
        await videoCall.join({ 
          create: true,
          video: false, // Don't request video stream initially
          audio: false, // Don't request audio stream initially
        });
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );
        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel("messaging", session.callId);
        await chatChannel.watch();
        setChannel(chatChannel);
      } catch (error) {
        // Don't show error toast for device not found errors (expected when no camera/mic)
        if (!error.message?.includes("device not found") && !error.message?.includes("Requested device not found")) {
          toast.error("Failed to join video call");
          console.error("Error init call", error);
        } else {
          // Device errors are expected, just log them
          console.warn("Media device not available (camera/mic), continuing without media:", error.message);
        }
      } finally {
        setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();

    // cleanup - performance reasons
    return () => {
      // iife
      (async () => {
        try {
          // Check if call is still active before trying to leave
          if (videoCall) {
            try {
              // Check if call state exists and is not already left
              const callingState = videoCall.callingState;
              if (callingState && callingState !== "LEFT") {
                await videoCall.leave();
              }
            } catch (leaveError) {
              // Ignore errors if call is already left or doesn't exist
              if (!leaveError.message?.includes("already been left")) {
                console.warn("Error leaving call during cleanup:", leaveError.message);
              }
            }
          }
          if (chatClientInstance) {
            try {
              await chatClientInstance.disconnectUser();
            } catch (disconnectError) {
              console.warn("Error disconnecting chat client:", disconnectError.message);
            }
          }
          await disconnectStreamClient();
        } catch (error) {
          // Only log non-expected errors
          if (!error.message?.includes("already been left")) {
            console.error("Cleanup error:", error);
          }
        }
      })();
    };
  }, [session, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;