const express = require("express");
const router = express.Router();

const {getAll, addFaqs, newUpdate, deleteFaqs, deleteAllFaqs} = require("./../controllers/faqController");
router.route("/").get(getFaqs)
.post(eventController.addFaqs);
router.route("/:id").get(eventController.getFaqs)
.delete(eventController.deleteFaqs)
.patch(eventController.updateFaqs);
// router.route("/deleteAllevents").post(eventController.deleteAllFaqs)



module.exports = router;
