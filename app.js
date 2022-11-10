const express = require("express");
const morgan = require("morgan");

const eventRouter = require("./routes/eventRoutes");
const faqRouter = require("./routes/faqRoutes");
const keytalkRouter = require("./routes/keytalkRoutes");
const sponsorRouter = require("./routes/keytalkRoutes");
const teamRouter = require("./routes/teamRoutes");
const webinarRouter = require("./routes/webinarRoutes");
const workshopRouter = require("./routes/workshopRoutes");

// INITIALIZING EXPRESS APP
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// DEFINING ALL ROUTES
app.use("/api/events", eventRouter);
app.use("/api/faqs", faqRouter);
app.use("/api/keytalks", keytalkRouter);
app.use("/api/sponsors", sponsorRouter);
app.use("/api/team", teamRouter);
app.use("/api/webinars", webinarRouter);
app.use("/api/workshops", workshopRouter);

// IF A ROUTE NOT AVAILABLE
app.all("*", async (req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Route doesn't exist",
    });
});

module.exports = app;
