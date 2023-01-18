const express = require("express");

const router = express.Router();
const usercontroller=require("../controllers/userController")

router.route("/").get(usercontroller.finduserDetail)
.post(usercontroller.saveuserDetail);
module.exports = router;