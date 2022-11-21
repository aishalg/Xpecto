const express = require("express");
const router = express.Router();

const {getAll, addFaqs, newUpdate, deleteFaqs, deleteAllFaqs} = require("./../controllers/faqController");
router.route("/").get(getAll);
router.route("/add").get(addFaqs);
router.route("/update/:id").get(newUpdate);
router.route("/deleteFaqs/:id").get(deleteFaqs);
router.route("/deleteAllFaqs").get(deleteAllFaqs);

module.exports = router;
