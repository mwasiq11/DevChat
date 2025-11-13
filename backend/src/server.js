import express from 'express';
import { ENV } from './lib/env.js';
import cors from 'cors';
import { connectDB } from './lib/db.js';

const app=express()
app.use(express.json())
app.use(cors({
	origin:'*',
	methodds:['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
	allowedHeaders:['Content-Type','Authorization'],
	credentials:true
}))

app.get("/health",(req,res,next)=>{
	res.status(200).json({msg:"successfully run the api."})
})

const PORT=ENV.PORT;
const startServer=async()=>{
	try {
		await connectDB();
		app.listen(PORT,()=>{
		console.log(`app running on http://localhost:${PORT}`);
})
	} catch (error) {
		console.log('Error starting the server',error);
	}
}
startServer();