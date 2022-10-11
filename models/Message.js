import mongoose from "mongoose";
const messageSchema = mongoose.Schema({
    chatroom_id: {
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true,
        
    },
    // In ui since only 2 way communication , I will match it with loggedInUserId,,,,LATER WE WILL NEED IDS IN CHATROOMS ANYWAY
    sender_id:{
        type: String,
        required: true
    }

})


export default mongoose.model('Message', messageSchema);