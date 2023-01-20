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
    const useremail =req.body.user;
    const data=req.body.data;
    var myquery ={"email":useremail}
    var newvalues = { $set: { phoneNumber:data.phonenumber,
    collegeName:data.collegename,degree:data.degree,branch:data.branch,referralCode:data.referralcode } };
    // var newvalues ={$set:{ "firstname":req.body.firstname,phoneNumber:req.body.phonenumber}}
    const s= await User.updateOne(myquery,newvalues);
    // console.log("datasaved successfully",newvalues);
    // console.log(s);
    res.status(200).json({
        status:"success",
        message:"Data saved Successfuly"
    })
  }
  catch(err){
    console.log(err);
    res.status(400).json({
      status:"failed",
      message:"Error Occure please try Again"
    })
  }
}
