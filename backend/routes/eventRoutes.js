const express = require("express");
const router = express.Router();

const eventController = require("./../controllers/eventController");

router.route("/").get(eventController.getEvents)
.post(eventController.addevent);
router.route("/:id").get(eventController.getEvent)
.delete(eventController.deleteOneEvent)
.patch(eventController.updateEvent);
router.route("/deleteAllevents").post(eventController.deleteAllEvent)
module.exports = router;