const mongoose = require("mongoose");

const webinarSchema = mongoose.Schema({
    // write your schema here
});

const Webinar = mongoose.model("Webinar", webinarSchema);

module.exports = Webinar;
