const router =require("express").Router();
const passport=require("passport");
const authcontroller=require("../controllers/authController")

router.route("/login/success").get(authcontroller.loginsuccess)
router.route("/login/failed").get(authcontroller.loginfail)
router.route("/google").get(authcontroller.google)
router.get("/google",passport.authenticate("google",{scope:["profile","email"]}));
router.get(
    "/google/callback",
    passport.authenticate("google",{
       successRedirect:process.env.CLIENT_LINK,
       failureRedirect:"/login/failed",
    })
)

module.exports =router;