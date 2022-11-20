const express = require("express");
const router = express.Router();

const eventController = require("./../controllers/eventController");

router.route("/").get(eventController.getAll);
router.route("/add").post(eventController.addevent)
router.route("/update/:id").post(eventController.updateEvent)
router.route("/delete/:id").post(eventController.deleteOneEvent)
router.route("/deleteall").post(eventController.deleteAllEvent)
module.exports = router;
