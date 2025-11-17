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

// import { StreamChat } from "stream-chat";
// import { ENV } from "./env.js";


// let streamClient = null;

// const initializeStreamClient = () => {
//   if (!streamClient) {
//     const apiKey = ENV.STREAM_API_KEY?.trim();
//     const apiSecret =ENV.STREAM_API_SECRET?.trim();
    
//     console.log('Checking Stream configuration:', {
//       hasApiKey: !!apiKey,
//       hasApiSecret: !!apiSecret,
//       keyLength: apiKey?.length,
//       secretLength: apiSecret?.length,
//     });
    
//     if (!apiKey || !apiSecret) {
//       throw new Error('Stream API key and secret key are required. Please check your environment variables.');
//     }

//     // Create a new instance with both API key and secret
//     streamClient = new StreamChat(apiKey, apiSecret);
//     console.log('Stream client initialized successfully');
//   }
//   return streamClient;
// };

// // Verify environment before initializing
// console.log('Current environment variables state:', {
//   hasStreamKey: !!ENV.STREAM_API_KEY,
//   hasStreamSecret: !!ENV.STREAM_API_SECRET,
// });

// // Initialize the client
// try {
//   streamClient = initializeStreamClient();
//   console.log('Stream client initialized successfully');
// } catch (error) {
//   console.error('Failed to initialize Stream client:', error.message);
//   throw error;
// }

// export const createUser = async (userData) => {
//   try {
//     const client = initializeStreamClient();
//     await client.upsertUser(userData);
//     console.log("Successfully connected to Stream Chat", userData.name);
//     return userData;
//   } catch (error) {
//     console.error("Error while connecting to Stream Chat:", error);
//     throw error;
//   }
// };

// export const deleteUser = async (userId) => {
//   try {
//     const client = initializeStreamClient();
//     await client.deleteUser(userId);
//     console.log("Successfully deleted user");
//   } catch (error) {
//     console.error("Error while deleting user:", error);
//     throw error;
//   }
// };


