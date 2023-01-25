const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const passport=require("passport");
const User = require("../models/userModel")
const { promisify } = require("util");
exports.loginsuccess = async (req, res) => {
  if (req.user) {
    // console.log("user id:               ",req.user.emails[0].value)
    const userinfo = await User.findOne({ email: req.user.emails[0].value });
    // console.log("userinfo", userinfo);
    var newuser = false;
    const userdetail = req.user;
    if (userinfo == null) {
      // console.log(userdetail,"user")
      User.create({
        googleId: userdetail.id,
        email: userdetail.emails[0].value,
        displayName: userdetail.displayName,
        firstName: userdetail.name.givenName,
        image: userdetail.photos[0].value,
      });
      newuser = true;
      // console.log("User data save succesfully")
    }
    const context = {
      email: userdetail.emails[0].value,
      displayName: userdetail.displayName,
      firstName: userdetail.name.givenName,
      image: userdetail.photos[0].value,
    };
    res.status(200).json({
      error: false,
      isnewuser: newuser,
      message: "Successfully Loged In",
      data: context,
    });
    // console.log(req.user.id,"user")
  } else {
    res.status(403).json({
      error: true,
      message: "Login Unsuccessfully Please retry after some time",
    });
  }
};

exports.loginfail = (req, res) => {
  res.status(401).json({
    error: true,
    message: "log in failure",
  });
};

exports.google = () => {
  passport.authenticate("google", { scope: ["profile", "email"] });
};

exports.logout = (req, res) => {
  req.logOut();
  res.send(200).json({
    status: "success",
    message: "successfully logged out",
  });
};

exports.googlecallback = () => {
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_LINK,
    failureRedirect: "/login/failed",
  });
};

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res, isNewUser) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: "success",
    jwtToken: token,
    isNewUser,
    data: {
      user,
    },
  });
};

exports.login = async (req, res, next) => {
  try {
    const oAuth2Client = new OAuth2Client();

    // console.log(process.env.GOOGLE_CLIENT_ID);
    const result = await oAuth2Client.verifyIdToken({
      idToken: req.body.credential,
      expectedAudience: process.env.GOOGLE_CLIENT_ID,
    });
    let isNewUser = false;
    let userFind = await User.findOne({ email: result.payload.email });

    if (!userFind) {
      isNewUser = true;
      const usr = await User.create({
        displayName: result.payload.name,
        image: result.payload.picture,
        googleId: result.payload.sub,
        email: result.payload.email,
        firstName: result.payload.name.split(" ")[0],
      });
      userFind = usr;
    }

    createSendToken(userFind, 200, res, isNewUser);
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: "error occured" });
  }
};

const isLoggedIn = async (req, res) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (token) {
    try {
      // 1) verify token
      // console.log(process.env.JWT_SECRET)
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return false;
      }

      // THERE IS A LOGGED IN USER
      return currentUser;
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  return false;
};

exports.protect = async (req, res, next) => {
  // checking if user is logged in
  const logged = isLoggedIn(req, res);
  if (!logged) {
    res.status(404).json({
      status: "fail",
      message: "You are not logged in, Please log in to continue",
    });
  }
  req.user = await logged;
  next();
};
