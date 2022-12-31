const passport=require("passport");

exports.loginsuccess=(req,res)=>{
    if(req.user){
        res.status(200).json({
            error:false,
            message:"Successfully Loged In",
            user:req.user,
        })
        console.log(req.user,"user")
    }else{
        res.status(403).json({error:true,message:"Not Authorized"});
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
    res.redirect(process.env.CLIENT_LINK);
}

exports.googlecallback=()=>{
    passport.authenticate("google",{
        successRedirect:process.env.CLIENT_LINK,
        failureRedirect:"/login/failed",
     })
}