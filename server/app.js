const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const eventRouter = require("./routes/eventRoutes");
const faqRouter = require("./routes/faqRoutes");
const keytalkRouter = require("./routes/keytalkRoutes");
const sponsorRouter = require("./routes/sponsorRoutes");
const teamMemberRouter = require("./routes/teamMemberRoutes");
const webinarRouter = require("./routes/webinarRoutes");
const workshopRouter = require("./routes/workshopRoutes");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup=require("./config/passport");
const authRoute=require("./routes/authRouters");
const paymentRouter=require("./routes/paymentRouters")
const userRouter =require("./routes/userRoute")
// INITIALIZING EXPRESS APP
const app = express();



// use it before all route definitions
// app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());
app.use(cors({origin:'*'}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  })

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}




//Cookies session
// app.use(cookieSession({
//     name:"session",
//     keys:["xpectoiitmandi"],
//     maxAge:24*60*60*100,
// }))

// app.use(passport.initialize());
// app.use(passport.session()); 

// app.use(
//     cors({
//         // origin:"http://localhost:3000",
//         methods:"GET,POST,PUT,DELETE,PATCH",
//         credentials:true,
//     })
// )



// DEFINING ALL ROUTES


app.use("/auth",authRoute);
app.use("/api/payment/",paymentRouter);
app.use("/api/events", eventRouter);
app.use("/api/faqs", faqRouter);
app.use("/api/keytalks", keytalkRouter);
app.use("/api/sponsors", sponsorRouter);
app.use("/api/teamMembers", teamMemberRouter);
app.use("/api/webinars", webinarRouter);
app.use("/api/workshops", workshopRouter);
app.use("/api/user",userRouter);
// IF A ROUTE NOT AVAILABLE
app.all("*", async (req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Route doesn't exist",
    });
});

module.exports = app;
