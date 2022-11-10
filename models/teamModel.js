const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    // write your schema here
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
