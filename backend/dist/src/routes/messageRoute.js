import express from "express";
import proctectRoute from "../middleware/proctectRoute.js";
import { getConversations, getMessages, sendMessage } from "../controllers/messageController.js";
const router = express.Router();
router.get('/conversations', proctectRoute, getConversations);
router.get('/:id', proctectRoute, getMessages);
router.post('/send/:id', proctectRoute, sendMessage);
export default router;
