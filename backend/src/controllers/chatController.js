import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req,res){
		try{
				const token=chatClient.createToken(req.user.clerkId);
				if(!token){
					console.error("Failed to create token");
				}
				await res.status(200).json({
					token,
					userId:req.user.clerkId,
					userName:req.user.name,
					userImage:req.user.userImage
				})
		}
		catch(error){
			console.error("Error generating stream token",error);
			res.status(500).json({message:"Internal server error"})
		}
}