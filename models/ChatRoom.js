import mongoose from 'mongoose';

const chatRoomSchema = mongoose.Schema({
    users: [mongoose.Schema({
        username: {
            type: String,
            required: [true, "Please enter an username"],
            minLength: 4,
            maxLength: 20
        },
        email: {
            type: String,
            required: [true, "Please enter your email id "],

        },
       
        avatar_url: {
            type: String,

        }
    })],
    total_members:{
        type: Number,
        default: 2,
    },
    



})

export default mongoose.model('ChatRoom', chatRoomSchema);