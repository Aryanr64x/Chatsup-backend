import User from "../models/User.js"
import { v4 as uuidv4 } from 'uuid';


export const createChatRoom = async(req, res)=>{
    const uuid = uuidv4();
    const chatroom = {
        _id: uuid,
        username: req.body.otheruser.username,
        email: req.body.otheruser.email,
    };
    try{
        await User.updateOne({_id: req.body.user._id},{chatrooms:[
            ...req.body.user.chatrooms, chatroom
        ]})


        await User.updateOne({_id: req.body.otheruser._id},{chatrooms:[
            ...req.body.otheruser.chatrooms, {
                _id: uuid,
                username: req.body.user.username,
                email: req.body.user.email,
            }
        ]})


        res.status(200).json(chatroom)

        

    }catch(e){
        console.log(e)
        res.status(400).json({
            msg: "Oops! An error has occured , Please trye again later"
        })
    }
}