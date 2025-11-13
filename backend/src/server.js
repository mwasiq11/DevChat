import express from 'express';
import dotenv from 'dotenv'
import { ENV } from './lib/env.js';

const app=express()
dotenv.config();

app.get("/health",(req,res,next)=>{
	res.status(200).json({msg:"successfully run the api."})
})

const PORT=ENV.PORT;
app.listen(PORT,()=>{
	console.log(`app running on http://localhost:${PORT}`);
})