const express = require("express");
const TimeTableGeneratorController = require("../controllers/timeTableGeneratorController");

const router = express.Router();

router.route("/").post(TimeTableGeneratorController.getSession);

module.exports = router;