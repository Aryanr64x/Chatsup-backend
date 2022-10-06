import User from "../models/User.js"
export const getUsers = async(req, res)=>{
    try{
        console.log("THE USER ID IS "+req.body.user._id)
        const users = await User.find({_id:{$ne: req.body.user._id}})
        res.status(200).json({
            users
        })
    }catch(e){
        console.log(e)
        res.status(400).json({
            msg: "Sorry Try again after sometime"
        })
    }
}
