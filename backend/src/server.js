import express from 'express';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import { inngest, functions } from './lib/inngest.js';
import { serve } from 'inngest/express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import chatRoutes from './routes/chatRoutes.js';
import sessionRoutes from './routes/sessionRoute.js';

const app = express();

// CORS configuration - must be before other middleware
// This ensures preflight requests are handled correctly
const allowedOrigins = [
  'https://devcodes.dpdns.org',
  'https://dev-chat-murex.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, Postman, or server-to-server)
      if (!origin) return callback(null, true);
      
      // In development, allow all origins
      if (ENV.NODE_ENV === 'development') {
        return callback(null, true);
      }
      
      // In production, check against allowed origins
      if (allowedOrigins.some(allowed => origin === allowed || origin.startsWith(allowed))) {
        callback(null, true);
      } else {
        // Still allow but log for debugging
        console.warn(`CORS: Allowing origin ${origin} (not in whitelist)`);
        callback(null, true);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400, // 24 hours - cache preflight requests
  })
);

// Middleware
app.use(express.json());

// Request logging middleware (for debugging)
app.use((req, res, next) => {
  console.log(`\n========== REQUEST RECEIVED ==========`);
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  console.log(`URL: ${req.url}`);
  console.log(`Original URL: ${req.originalUrl}`);
  console.log(`Base URL: ${req.baseUrl}`);
  console.log(`Query:`, req.query);
  console.log(`Headers:`, {
    host: req.headers.host,
    'x-forwarded-for': req.headers['x-forwarded-for'],
    'x-vercel-id': req.headers['x-vercel-id']
  });
  console.log(`=====================================\n`);
  next();
});

// Vercel routing fix: Normalize paths for serverless function routing
// On Vercel, when /api/* requests are routed to /api/index.js serverless function,
// the path that Express receives might be modified. We need to handle this.
app.use((req, res, next) => {
  // Get the raw request info
  const originalUrl = req.originalUrl || req.url;
  const currentPath = req.path;
  
  // Vercel serverless functions receive the full path including /api
  // So /api/sessions becomes available as req.url = '/api/sessions'
  // But sometimes it might be just '/sessions' - handle both
  
  // If path doesn't have /api but we're expecting API routes
  if (!currentPath.startsWith('/api') && originalUrl.startsWith('/api')) {
    // Restore the full path
    req.url = originalUrl;
    req.originalUrl = originalUrl;
    console.log(`[Path Fix] Restored: ${currentPath} → ${originalUrl}`);
  } 
  // If we got the root path but originalUrl shows /api/*
  else if (currentPath === '/' && originalUrl && originalUrl.startsWith('/api')) {
    req.url = originalUrl;
    req.originalUrl = originalUrl;
    console.log(`[Path Fix] Root → API path: ${originalUrl}`);
  }
  
  next();
});

// Public root ping (available without Clerk auth)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API running successfully' });
});

// Handle POST to root - this shouldn't happen, but provide helpful error
app.post('/', (req, res) => {
  res.status(404).json({ 
    error: 'Invalid endpoint',
    message: 'POST requests should go to /api/sessions, not to the root path',
    suggestion: 'Check your VITE_API_URL environment variable - it should be set to https://dev-chat-murex.vercel.app/api',
    path: req.path,
    originalUrl: req.originalUrl
  });
});

// Test route to verify server is working (no auth required)
app.get('/api/test', (req, res) => {
  res.status(200).json({ 
    message: 'API test endpoint working',
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path
  });
});

// Also register test route without /api prefix for Vercel
app.get('/test', (req, res) => {
  res.status(200).json({ 
    message: 'API test endpoint working (no prefix)',
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path
  });
});

app.use(clerkMiddleware());

// Inngest route
app.use('/api/inngest', serve({ client: inngest, functions }));
app.use('/api/chat', chatRoutes);
app.use('/api/sessions', sessionRoutes);

// Also register routes without /api prefix for Vercel compatibility
// When Vercel routes /api/sessions to /api/index.js, it may strip the /api prefix
app.use('/inngest', serve({ client: inngest, functions }));
app.use('/chat', chatRoutes);
app.use('/sessions', sessionRoutes);

// Health check route
app.get('/health', (req, res) => {
  req.auth;
  res.status(200).json({ msg: 'API is running successfully' });
});

// 404 handler for unmatched routes
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.path}`);
  console.log(`404 - Original URL: ${req.originalUrl}`);
  console.log(`404 - Full URL: ${req.url}`);
  console.log(`404 - Base URL: ${req.baseUrl}`);
  
  res.status(404).json({ 
    error: 'Route not found',
    method: req.method,
    path: req.path,
    originalUrl: req.originalUrl,
    fullUrl: req.url,
    baseUrl: req.baseUrl,
    availableRoutes: [
      'GET /',
      'GET /health',
      'GET /api/test',
      'POST /api/sessions',
      'GET /api/sessions/active',
      'GET /api/sessions/my-recent',
      'GET /api/sessions/:id',
      'POST /api/sessions/:id/join',
      'POST /api/sessions/:id/end'
    ],
    note: 'If path does not start with /api, routes are also available without /api prefix'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Internal server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const ensureDbConnection = async () => {
  if (globalThis.__DEVCHAT_DB_READY) {
    return;
  }

  await connectDB();
  globalThis.__DEVCHAT_DB_READY = true;
};

// Local/dev server (not used on Vercel)
if (process.env.VERCEL !== '1') {
  const PORT = ENV.PORT || 3000;

  const startServer = async () => {
    try {
      await ensureDbConnection();
      app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error('Error starting the server', error);
    }
  };

  startServer();
}

const handler = async (req, res) => {
  console.log('[Handler] Request received:', req.method, req.url);
  
  try {
    // Ensure database connection (this is cached, so fast on subsequent requests)
    ensureDbConnection().catch(err => {
      console.warn('[Handler] DB connection warning (non-blocking):', err.message);
    });
    
    // Handle request with Express app
    return app(req, res);
  } catch (error) {
    console.error('[Handler] Fatal error:', error);
    console.error('[Handler] Error stack:', error.stack);
    
    if (!res.headersSent) {
      return res.status(500).json({ 
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Server error'
      });
    }
    return res;
  }
};

export default handler;