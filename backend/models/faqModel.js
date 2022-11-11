const mongoose = require("mongoose");

const faqSchema = mongoose.Schema({
    // write your schema here
});

const Faq = mongoose.model("Faq", faqSchema);

module.exports = Faq;
