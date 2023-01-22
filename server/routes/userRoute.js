const express = require("express");

const router = express.Router();
const usercontroller=require("../controllers/userController")

router.route("/signup").get(usercontroller.finduserDetail)
.post(usercontroller.saveuserDetail);

router.route("/profile").post(usercontroller.profilepage)
module.exports = router;