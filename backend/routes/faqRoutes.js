const express = require("express");
const router = express.Router();

const faqController = require("./../controllers/faqController");
router.route("/").get(getFaqs)
.post(faqController.addFaqs);
router.route("/:id").get(faqController.getFaqs)
.delete(faqController.deleteFaqs)
.patch(faqController.updateFaqs);




module.exports = router;

