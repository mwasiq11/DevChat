import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

const ensureUserExists = async (clerkId) => {
  let user = await User.findOne({ clerkId });
  if (user) return user;

  // Fetch the latest profile from Clerk when the user is missing locally
  const clerkUser = await clerkClient.users.getUser(clerkId);

  const email =
    clerkUser?.emailAddresses?.[0]?.emailAddress ||
    clerkUser?.primaryEmailAddress?.emailAddress;

  const name =
    `${clerkUser?.firstName || ""} ${clerkUser?.lastName || ""}`.trim() ||
    clerkUser?.username ||
    email ||
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
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];