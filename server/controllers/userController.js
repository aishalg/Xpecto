const User=require("../models/userModel")

exports.finduserDetail= async(user_id)=>{
  let userinfo = await User.findOne({ _id: user_id }).lean();
  return userinfo;
}

exports.saveuserDetail=async(req,res)=>{
  try{
    const data=req.body;
    var myquery ={"email":data.useremail}
    var newvalues = { $set: {firstname:data.firstname, phoneNumber:data.phonenumber,fullName:(data.firstname + " " + data.lastname), 
    collegeName:data.collegename,degree:data.degree,branch:data.branch,referralCode:data.referralcode } };
    User.updateOne(myquery,newvalues);
    req.status(200).json({
        status:"success",
        message:"Data saved Successfuly"
    })
  }
}
// phoneNumber: {
//     type: Number,
//     // required: true,
// },
// fullName: {
//     type: String,
// },
// collegeName: {
//     type: String,
// },
// degree: {
//     type: String,
// },
// branch: {
//     type: String,
// },
// referralCode: {
//     type: String,
// },