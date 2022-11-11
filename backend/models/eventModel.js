const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    // write your schema here
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
