const User=require("../models/userModel")

exports.finduserDetail= async(req,res)=>{
   try{
      if(req.user){
        const userdetail=req.user;
        context={
         "email":userdetail.emails[0].value,
         "firstName":userdetail.name.givenName,
        }
        res.status(200).json({
           status:"success",
           error:false,
           data:context
        })
      }
   }
   catch{
        res.status(400).json({
          error:true,
          message:"Error Occure please try Again"
        })
   }
}

exports.saveuserDetail=async(req,res)=>{
  try{
    const useremail =req.user.emails[0].value;
    const data=req.body;
    var myquery ={"email":useremail}
    var newvalues = { $set: {firstname:data.firstname, phoneNumber:data.phonenumber,fullName:(data.firstname + " " + data.lastname),
    collegeName:data.collegename,degree:data.degree,branch:data.branch,referralCode:data.referralcode } };
    console.log("datasaved successfully",newvalues);
    User.updateOne(myquery,newvalues);
    res.status(200).json({
        status:"success",
        message:"Data saved Successfuly"
    })
  }
  catch{
    res.status(400).json({
      status:"failed",
      message:"Error Occure please try Again"
    })
  }
}
