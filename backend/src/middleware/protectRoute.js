import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

const ensureUserExists = async (clerkId) => {
  let user = await User.findOne({ clerkId });
  if (user) return user;

  // Try to fetch the latest profile from Clerk when the user is missing locally
  let clerkUser = null;
  if (clerkClient) {
    try {
      clerkUser = await clerkClient.users.getUser(clerkId);
    } catch (clerkError) {
      console.error("Failed to fetch user from Clerk API:", clerkError.message);
      // Continue with minimal user creation if Clerk API fails
    }
  } else {
    console.warn("Clerk client not available, creating user with minimal info");
  }

  const email =
    clerkUser?.emailAddresses?.[0]?.emailAddress ||
    clerkUser?.primaryEmailAddress?.emailAddress ||
    `${clerkId}@temp.local`;

  const name =
    (clerkUser?.firstName || clerkUser?.lastName
      ? `${clerkUser?.firstName || ""} ${clerkUser?.lastName || ""}`.trim()
      : null) ||
    clerkUser?.username ||
    (email?.split("@")[0] || "user") ||
    "Unknown User";

  user = await User.create({
    clerkId,
    email,
    name,
    profileImage: clerkUser?.imageUrl || "",
  });

  return user;
};

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth?.userId;

      if (!clerkId) {
        return res
          .status(401)
          .json({ message: "Unauthorized - invalid session token" });
      }

      const user = await ensureUserExists(clerkId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware:", {
        message: error.message,
        stack: error.stack,
        clerkId: req.auth?.userId,
      });
      res.status(500).json({ 
        message: "Internal Server Error",
        error: process.env.NODE_ENV === "development" ? error.message : undefined
      });
    }
  },
];