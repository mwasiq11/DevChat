import handler from '../src/server.js';

// Vercel serverless function wrapper
export default async (req, res) => {
  // Ensure req and res have all necessary properties for Express
  // Vercel might modify the request, so we pass it through as-is
  return handler(req, res);
};

