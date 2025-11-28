import handler from '../src/server.js';

// Vercel serverless function wrapper
// This function handles all requests routed to /api/*
// On Vercel, requests to /api/* are automatically routed to this function
export default handler;

