import { StreamChat } from "stream-chat";
import {StreamClient} from "@stream-io/node-sdk"
import { ENV } from "./env.js";

const apikey=ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;

if (!apikey||!apiSecret) {
	throw new Error(`Stream API key and secret must be set in environment variables`)
}

export const streamClient=new StreamClient(apikey,apiSecret)
export const chatClient = StreamChat.getInstance(apikey,apiSecret);

export const createUser=async(userData)=>{
	try {
		await chatClient.upsertUser(userData)
		console.log('stream user created',userData)
	} catch (error) {
		console.log(`stream users can not be created`,error);
		
	}
}

export const deleteUser=async(userId)=>{
	try {
		await chatClient.deleteUser(userId)
		console.log('stream user deleted successfully',userId)
	} catch (error) {
		console.log(`stream users can not be created`,error);
		
	}
}

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


