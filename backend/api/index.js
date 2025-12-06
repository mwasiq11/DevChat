import handler from '../src/server.js';

// Export the handler for Vercel serverless with error handling
export default async (req, res) => {
  try {
    // Log incoming request
    console.log('[Vercel Function] Request:', req.method, req.url);
    
    // Call the Express handler
    await handler(req, res);
  } catch (error) {
    console.error('[Vercel Function] Fatal error:', error);
    
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Function execution failed',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
};