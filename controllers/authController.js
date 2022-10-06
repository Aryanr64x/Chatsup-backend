import User from "../models/User.js"
import jwt from 'jsonwebtoken'
import SECRET from "../SECRET.js";
import { promisify } from 'util'

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



export const protect = async(req, res, next)=>{
       
    try{
           if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
                  const token = req.headers.authorization.split(' ')[1]
                  // Now check if the token is valid or not 
                  const decoded =   await promisify(jwt.verify)(token, SECRET)
                  const user  = await User.findOne({_id: decoded.id})
                  if(!user){
                         res.status(401).send("User no longer exists in the database");
                  }
                  // NOT IMPLEMENTING THE PASSWORD FEATURE BUT UNDERSTOOD
                  // Imp step below ...because user will be used ahed
                  req.body.user = user;
                  next()
           }else{
                  res.status(401).send("Your are not authorized for this request");
           }
    }catch(e){
           console.log(e)
           res.send("JSON WEB TOKEN VERIFICATION OF USER ERROR !");
    }
   
}