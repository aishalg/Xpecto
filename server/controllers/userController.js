const User = require("../models/userModel");

exports.finduserDetail = async (req, res) => {
  try {
    if (req.user) {
      const userdetail = req.user;
      context = {
        email: userdetail.emails[0].value,
        firstName: userdetail.name.givenName,
      };
      res.status(200).json({
        status: "success",
        error: false,
        data: context,
      });
    }
  } catch {
    res.status(400).json({
      error: true,
      message: "Error Occure please try Again",
    });
  }
};

exports.saveuserDetail = async (req, res) => {
  try {
    const useremail = req.body.user;
    const data = req.body.data;
    var myquery = { email: useremail };
    var newvalues = {
      $set: {
        phoneNumber: data.phonenumber,
        collegeName: data.collegename,
        degree: data.degree,
        branch: data.branch,
        referralCode: data.referralcode,
      },
    };
    const s = await User.updateOne(myquery, newvalues);

    res.status(200).json({
      status: "success",
      message: "Data saved Successfuly",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: "Error Occure please try Again",
    });
  }
};

exports.profilepage = async (req, res) => {
  try {
    const useremail = req.body.user;
    const data = await User.findOne({ email: useremail });
    // console.log("vnjdnv", data);
    res.status(200).json({
      status: "success",
      message: "Data saved Successfuly",
      data: data,
    });
  } catch (error) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: "Error Occure please try Again",
    });
  }
};

const filterObj = (obj, ...restrictedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (!restrictedFields.includes(el)) newObj[el] = obj[el];
  });
  // console.log(obj);
  return newObj;
};

exports.getOneUser = async (req, res, next) => {
  try {
    const usr = req.user;
    // console.log(usr);
    res.status(200).json({
      status: "success",
      user: usr,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};
exports.updateUserDetails = async (req, res, next) => {
  try {
    // Filtered out unwanted fields names that are not allowed to be updated
    // console.log(req.body);
    const updatedUser = await User.updateOne(
      { _id: req.user._id },
      { phoneNumber: req.body.phonenumber, collegeName: req.body.collegename },
      {
        new: true,
        runValidators: true,
      }
    );

    // send response
    res.status(200).json({
      status: "success",
      updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
