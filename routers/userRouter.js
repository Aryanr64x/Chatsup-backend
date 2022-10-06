import express from 'express';
import { protect } from '../controllers/authController.js';
import { getUsers } from '../controllers/userController.js';

const userRouter = express.Router()
userRouter.get('/', protect, getUsers);


export default userRouter;
