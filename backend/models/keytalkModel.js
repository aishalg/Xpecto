const mongoose = require("mongoose");

const keytalkSchema = mongoose.Schema({
    // write your schema here
});

const Keytalk = mongoose.model("Keytalk", keytalkSchema);

module.exports = Keytalk;
