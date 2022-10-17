import Message from "../models/Message.js"

export const getMessages = async(req, res)=>{
    try{
        const messages = await Message.find({chatroom_id: req.params.chatroom_id})
        res.status(200).json(messages);
    }catch(e){
        console.log(e);
        res.status(400).json({msg: "Oops ! Something went wrong"})
    }

} 

export const createMessage = async(req, res)=>{
        try{
             const message = await Message.create({
                sender_id: req.body.user._id,
                text: req.body.text,
                chatroom_id: req.params.chatroom_id
            })
            
            res.status(200).json(message)
        }catch(e){
            console.log(e)
            res.status(400).json({
                msg: "Oops something went wrong"
            })
        }


    }