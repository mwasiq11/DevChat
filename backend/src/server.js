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

// Middleware
app.use(express.json());

// Public root ping (available without Clerk auth)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API running successfully' });
});

app.use(
  cors({
    origin: '*',
    credentials: false,
  })
);
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
  await ensureDbConnection();
  return app(req, res);
};

export default handler;