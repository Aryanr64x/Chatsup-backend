import express from 'express'
import mongoose from 'mongoose';
import authRouter from './routers/authRouter.js';

const app = express();

app.use(express.json())
app.use('/api/auth/',authRouter);

mongoose.connect("mongodb+srv://saket:annesha@cluster0.g5gpsai.mongodb.net/chatsup?retryWrites=true&w=majority", ()=>{
    console.log("The DB has been connected")
})





app.listen(3000, ()=>{
    console.log("The server is running ")
})



