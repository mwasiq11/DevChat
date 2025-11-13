import express from 'express';
import { ENV } from './lib/env.js';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import { inngest, functions } from './lib/inngest.js';
import { serve } from 'inngest/express';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Inngest route
app.use('/api/inngest', serve({ client: inngest, functions }));

// Root route for testing
app.get('/', (req, res) => {
  res.status(200).send('Backend is running successfully');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ msg: 'API is running successfully' });
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
