import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
const schema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please enter an username"],
        minLength: 4,
        maxLength: 20
    },
    email: {
        type: String,
        required: [true, "Please enter your email id "],

    },
    password:{
        type: String,
        required: [true, "Please enter a password"],

    },
    avatar_url:{
        type: String, 
        
    },
    chatrooms:[mongoose.Schema( {
        _id: {
            type: String, 
            required: [true, "No id provided for the chatroom"],
        }, 
        username:{
            type:String,
            required: [true, "No username provided for the chatroom"]
        },
        email:{
            type: String, 
            required: [true, "No email provided for the chatroom"],
            unique: true,
        },
        avatar_url:{
            type: String
        }
    })]
    
})

export default mongoose.model('User', schema);