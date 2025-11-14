import { Inngest } from "inngest";
import {connectDB}from "../lib/db.js"
import User from "../models/User.js"
import { createUser, deleteUser } from '../lib/stream.js';

export const inngest = new Inngest({ id: "devchat" });

const syncUser=inngest.createFunction(
	{id:'sync-user'},
	{event:'clerk/user.created'},
	async({event})=>{
		await connectDB();
		const {id, email_addresses, first_name, last_name, image_url}=event.data;
		const newUser={
			clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,

		};
		await User.create(newUser);
		await createUser({
			id:newUser.clerkId.tostring(),
			name:newUser.name,
		})
	}
)

const deleteUserFromDB=inngest.createFunction(
	{id:'delete-user-from-db'},
	{event:'clerk/user.deleted'},
	async({event})=>{
		await connectDB();
		const {id}=event.data;
		await User.deleteOne({clerkId:id})
		await deleteUser(id.tostring())
		
	}
)

export const functions = [syncUser,deleteUserFromDB];


