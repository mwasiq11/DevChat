import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY?.trim();
const apiSecret = ENV.STREAM_API_SECRET?.trim();

export const isStreamConfigured = Boolean(apiKey && apiSecret);

let streamClient = null;
let chatClient = null;

if (isStreamConfigured) {
  streamClient = new StreamClient(apiKey, apiSecret);
  chatClient = StreamChat.getInstance(apiKey, apiSecret);
  console.log("Stream video/chat clients configured");
} else {
  console.warn(
    "Stream API credentials are missing. Video/chat features are disabled."
  );
}

export { streamClient, chatClient };

export const createUser = async (userData) => {
  if (!chatClient) {
    console.warn("Skipping Stream user creation; chat client not configured");
    return;
  }
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user created", userData);
  } catch (error) {
    console.error("Stream user creation failed", error);
  }
};

export const deleteUser = async (userId) => {
  if (!chatClient) {
    console.warn("Skipping Stream user deletion; chat client not configured");
    return;
  }
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully", userId);
  } catch (error) {
    console.error("Stream user deletion failed", error);
  }
};
