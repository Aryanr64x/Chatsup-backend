import User from "../models/User.js"
import jwt from 'jsonwebtoken'
import SECRET from "../SECRET.js";
export const signUp = async(req,res)=>{

    if(req.body.password !== req.body.password_confirm){
        res.status(401).json({
            msg: "The passwords dont match"
        })
    }

    try{
        const user = await User.create({
            username: req.body.username,
            email: req.body.email, 
            password: req.body.password,
            avatar_url: req.body.avatar_url
        });
        const token =  jwt.sign({id: user._id}, SECRET)
        res.status(200).json({
            token, user
        })

    }catch(e){
        console.log(e)
        res.status(400).json({
            msg: "Sorry ! Try again later "
        })
    }
}


export const signIn = async (req, res)=>{
   try{
        const user = await User.findOne({email: req.body.email});
        if(!user ||  user.password !== req.body.password){
            res.status(401).json({
                msg: "Invalid email or password"
            })  
        }
        const token =  jwt.sign({id: user._id}, SECRET)
        res.status(200).json({
            token, user
        })




   }catch(e){
        console.log(e)
        res.status(400).json({
            msg: "Sorry ! Try again later"
        })
   }
}