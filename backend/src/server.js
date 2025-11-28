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
    credentials: false,
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
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  console.log('Full URL:', req.url);
  console.log('Original URL:', req.originalUrl);
  console.log('Base URL:', req.baseUrl);
  next();
});

// Vercel routing fix: Handle path modification when requests are routed through serverless function
app.use((req, res, next) => {
  // Log the incoming request details for debugging
  const originalPath = req.path;
  const originalUrl = req.originalUrl || req.url;
  
  // If we're on Vercel and the path is just '/', check if originalUrl has /api
  if (process.env.VERCEL === '1' && originalPath === '/' && originalUrl.startsWith('/api/')) {
    // Restore the full path from originalUrl
    req.url = originalUrl;
    console.log(`[Vercel Fix] Restored path from '/' to '${originalUrl}'`);
  }
  
  // Also handle case where path doesn't include /api but originalUrl does
  if (!originalPath.startsWith('/api') && originalUrl.startsWith('/api/')) {
    req.url = originalUrl;
    console.log(`[Vercel Fix] Restored path '${originalPath}' to '${originalUrl}'`);
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

app.use(clerkMiddleware());

// Inngest route
app.use('/api/inngest', serve({ client: inngest, functions }));
app.use('/api/chat', chatRoutes);
app.use('/api/sessions', sessionRoutes);

// Health check route
app.get('/health', (req, res) => {
  req.auth;
  res.status(200).json({ msg: 'API is running successfully' });
});

// 404 handler for unmatched routes
app.use((req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.path}`);
  res.status(404).json({ 
    error: 'Route not found',
    method: req.method,
    path: req.path,
    availableRoutes: [
      'GET /',
      'GET /health',
      'POST /api/sessions',
      'GET /api/sessions/active',
      'GET /api/sessions/my-recent',
      'GET /api/sessions/:id',
      'POST /api/sessions/:id/join',
      'POST /api/sessions/:id/end'
    ]
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
  try {
    await ensureDbConnection();
    return app(req, res);
  } catch (error) {
    console.error('Handler error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export default handler;