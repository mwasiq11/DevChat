import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import { inngest, functions } from './lib/inngest.js';
import { serve } from 'inngest/express';

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Inngest route
app.use('/api/inngest', serve({ client: inngest, functions }));

// API routes (place all your API routes here before the catch-all)

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ msg: 'API is running successfully' });
});

// Catch-all: serve frontend for all unmatched routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Internal server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = ENV.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server', error);
  }
};

startServer();