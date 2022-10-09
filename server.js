import express from 'express'
import mongoose from 'mongoose';
import authRouter from './routers/authRouter.js';
import chatroomRouter from './routers/chatroomRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();

app.use(express.json())

app.use('/api/auth/',authRouter);

app.use('/api/users', userRouter);

app.use('/api/chatrooms', chatroomRouter)


mongoose.connect("mongodb+srv://saket:annesha@cluster0.g5gpsai.mongodb.net/chatsup?retryWrites=true&w=majority", ()=>{
    console.log("The DB has been connected")
})





app.listen(3000, ()=>{
    console.log("The server is running ")
})



