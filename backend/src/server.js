import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
import { serve } from "inngest/express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  // Get the raw request info
  const originalUrl = req.originalUrl || req.url;

  // If path doesn't have /api but we're expecting API routes
  if (!currentPath.startsWith("/api") && originalUrl.startsWith("/api")) {
    // Restore the full path
    req.url = originalUrl;
    req.originalUrl = originalUrl;
  }
  // If we got the root path but originalUrl shows /api/*
  else if (
    currentPath === "/" &&
    originalUrl &&
    originalUrl.startsWith("/api")
  ) {
    req.url = originalUrl;
    req.originalUrl = originalUrl;
  }

  next();
});

// Public root ping (available without Clerk auth)
app.get("/", (req, res) => {
  res.status(200).json({ message: "API running successfully" });
});

app.use(clerkMiddleware());

// Inngest route
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// Also register routes without /api prefix for Vercel compatibility
// When Vercel routes /api/sessions to /api/index.js, it may strip the /api prefix
app.use("/inngest", serve({ client: inngest, functions }));
app.use("/chat", chatRoutes);
app.use("/sessions", sessionRoutes);

// Health check route
app.get((req, res, next) => {
  req.auth;
  res.status(200).json({ msg: "API is running successfully" });
});

const ensureDbConnection = async () => {
  if (globalThis.__DEVCHAT_DB_READY) {
    return;
  }

  await connectDB();
  globalThis.__DEVCHAT_DB_READY = true;
};

// Local/dev server (not used on Vercel)
if (process.env.VERCEL !== "1") {
  const PORT = ENV.PORT || 3000;

  const startServer = async () => {
    try {
      await ensureDbConnection();
      app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("Error starting the server", error);
    }
  };

  startServer();
}

const handler = async (req, res) => {
  try {
    // Ensure database connection (this is cached, so fast on subsequent requests)
    ensureDbConnection().catch((err) => {
      console.warn(
        "[Handler] DB connection warning (non-blocking):",
        err.message
      );
    });

    // Handle request with Express app
    return app(req, res);
  } catch (error) {
    console.error("[Handler] Fatal error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        error: "Internal server error",
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Server error",
      });
    }
    return res;
  }
};

export default handler;
