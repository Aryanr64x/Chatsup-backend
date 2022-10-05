import mongoose from "mongoose";
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
        
    }
    
})

export default mongoose.model('User', schema);