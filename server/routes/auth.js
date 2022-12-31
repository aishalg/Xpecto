const router =require("express").Router();
const passport=require("passport");

router.get("/login/success",(req,res)=>{
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
})
router.get("/login/failed",(req,res)=>{
res.status(401).json({
    error:true,
    message:"log in failure"
})
});

router.get("/google",passport.authenticate("google",{scope:["profile","email"]}));

router.get("/logout",(req,res)=>{
req.logOut();
res.redirect(process.env.CLIENT_LINK);
})
router.get(
    "/google/callback",
    passport.authenticate("google",{
       successRedirect:process.env.CLIENT_LINK,
       failureRedirect:"/login/failed",
    })
)

module.exports =router;