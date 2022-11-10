const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    // write your schema here
});

const TeamMember = mongoose.model("TeamMember", teamSchema);

module.exports = TeamMember;
