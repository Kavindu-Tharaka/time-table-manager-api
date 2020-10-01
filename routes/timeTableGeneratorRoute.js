const express = require("express");
const TimeTableGeneratorController = require("../controllers/timeTableGeneratorController");

const router = express.Router();

router.route("/").post(TimeTableGeneratorController.getSession);
router.route("/generate").post(TimeTableGeneratorController.generateTimeTable)
router.route("/lecturer").post(TimeTableGeneratorController.getLecturer)


module.exports = router;