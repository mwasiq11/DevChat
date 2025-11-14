import { StreamChat } from "stream-chat";
import { ENV } from "./env";

const apikey=ENV.STREAM_API_KEY;
const apiSecret=ENV.STREAM_API_SECRET;

if (!apikey||!apiSecret) {
	throw new Error(`Stream API key and secret must be set in environment variables`)
}

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


