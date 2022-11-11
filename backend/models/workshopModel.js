const mongoose = require("mongoose");

const workshopSchema = mongoose.Schema({
    // write your schema here
});

const Workshop = mongoose.model("Workshop", workshopSchema);

module.exports = Workshop;
