import express from 'express'
import { protect } from '../controllers/authController.js';
import { createMessage, getMessages } from '../controllers/messageController.js';
const messageRouter = express.Router();
messageRouter.get('/:chatroom_id', protect, getMessages);
messageRouter.post('/:chatroom_id', protect, createMessage);

export default messageRouter;