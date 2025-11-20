import dotenv from 'dotenv'
dotenv.config({quiet:true});

const DEFAULT_PORT = 3000;
const DEFAULT_CLIENT_URL = 'http://localhost:5173';

export const ENV = {
	PORT: process.env.PORT || DEFAULT_PORT,
	NODE_ENV: process.env.NODE_ENV || 'development',
	DB_URL: process.env.DB_URL,
	INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
	INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
	STREAM_API_KEY: process.env.STREAM_API_KEY,
	STREAM_API_SECRET: process.env.STREAM_API_SECRET,
	CLIENT_URL: process.env.CLIENT_URL || DEFAULT_CLIENT_URL,
};