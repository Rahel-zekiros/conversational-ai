import express from "express";
import {
  getConversations,
  createConversation,
} from "../Controllers/ChatController.js";
import { verifyToken } from "../user-registration/Middleware/authMiddleware.js";

const router = express.Router();

router.get("/conversations", verifyToken, getConversations);

router.post("/conversations", verifyToken, createConversation);

export default router;