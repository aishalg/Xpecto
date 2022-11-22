const express = require("express");
const router = express.Router();

const {getAll, addFaqs, newUpdate, deleteFaqs, deleteAllFaqs} = require("./../controllers/faqController");
router.route("/").get(getFaqs)
.post(faqsController.addFaqs);
router.route("/:id").get(faqsController.getFaqs)
.delete(faqsController.deleteFaqs)
.patch(faqsController.updateFaqs);
// router.route("/deleteAllevents").post(eventController.deleteAllFaqs)



module.exports = router;
