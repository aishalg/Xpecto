const mongoose = require("mongoose");

const sponsorSchema = mongoose.Schema({
    // write your schema here
});

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

module.exports = Sponsor;
