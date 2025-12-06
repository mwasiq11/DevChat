import handler from '../src/server.js';

// Vercel serverless function wrapper
// This function handles all requests routed to /api/*
// On Vercel, the path may be stripped, so we restore it from the query parameter
export default async (req, res) => {
  // Restore the original path if it was passed via query parameter
  if (req.query && req.query.path) {
    const originalPath = req.query.path;
    console.log('[Vercel Handler] Restoring path from query:', originalPath);
    req.url = originalPath;
    req.originalUrl = originalPath;
    // Remove the path query parameter so it doesn't interfere
    delete req.query.path;
  }
  
  console.log('[Vercel Handler] Final URL:', req.url);
  console.log('[Vercel Handler] Method:', req.method);
  
  // Pass to Express handler
  return handler(req, res);
};