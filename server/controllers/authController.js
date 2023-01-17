const passport=require("passport");
const User = require("../models/userModel")
exports.loginsuccess=async(req,res)=>{
   
    if(req.user){
        // console.log("user id:               ",req.user.emails[0].value)
        const userinfo = await User.findOne({"email":req.user.emails[0].value});
        console.log("userinfo",userinfo)
        var newuser=false;
        if(userinfo==null){
            const userdetail=req.user;
            // console.log(userdetail,"user")
            User.create({
               googleId:userdetail.id,
               email:userdetail.emails[0].value,
               displayName:userdetail.displayName,
               firstName:userdetail.name.givenName,
               image:userdetail.photos[0].value, 
            })
            newuser=true;
            // console.log("User data save succesfully")
        }
        res.status(200).json({
            error:false,
            isnewuser:newuser,
            message:"Successfully Loged In",
            user:req.user,
        })
        // console.log(req.user.id,"user")
    }else{
        res.status(403).json({error:true,message:"Login Unsuccessfully Please retry after some time"});
    }
}

exports.loginfail=(req,res)=>{
    res.status(401).json({
        error:true,
        message:"log in failure"
    })
    };

exports.google=()=>{
    passport.authenticate("google",{scope:["profile","email"]})
}

exports.logout=(req,res)=>{
    req.logOut();
}

exports.googlecallback=()=>{
    passport.authenticate("google",{
        successRedirect:process.env.CLIENT_LINK,
        failureRedirect:"/login/failed",
     })
}
