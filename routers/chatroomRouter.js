import express from 'express'
import { protect } from '../controllers/authController.js';
import { createChatRoom } from '../controllers/chatroomController.js';
const chatroomRouter = express.Router();

chatroomRouter.route('/').post(protect, createChatRoom);



export default chatroomRouter;