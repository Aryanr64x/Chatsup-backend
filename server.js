import express from 'express'
import mongoose from 'mongoose';
import authRouter from './routers/authRouter.js';
import chatroomRouter from './routers/chatroomRouter.js';
import messageRouter from './routers/messageRouter.js';
import userRouter from './routers/userRouter.js';
import http from 'http'

import { Server, Socket } from 'socket.io';


const app = express();
const server = http.createServer(app)

app.use(express.json())

app.use('/api/auth/', authRouter);

app.use('/api/users', userRouter);

app.use('/api/chatrooms', chatroomRouter)

app.use('/api/messages', messageRouter)


mongoose.connect("mongodb+srv://saket:annesha@cluster0.g5gpsai.mongodb.net/chatsup?retryWrites=true&w=majority", () => {
    console.log("The DB has been connected")
})



const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log("new connection has been made")
    console.log(socket.id)
    socket.on('join-room', ({ roomname })=>{
        console.log(roomname + " has joined  a room ")
        socket.join(roomname)
    });
    socket.on('new-message', ({ text, roomname })=>{
        console.log("A new message will now be sent")
        socket.to(roomname).emit('new-message', {text})
    })

})



server.listen(3000, () => {
    console.log("The server is running ")
})



