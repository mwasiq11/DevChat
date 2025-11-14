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

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start server locally
const PORT = ENV.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`App running on port:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server', error);
  }
};

startServer()