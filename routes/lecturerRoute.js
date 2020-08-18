const express = require('express');
const lecturerController = require('../controllers/lecturerController');

const router = express.Router();

router
	.route('/')
	.post(lecturerController.createLecturer)
	.get(lecturerController.getAllLecturer);

router
	.route('/:id')
	.get(lecturerController.getLecturer)
	.patch(lecturerController.updateLecturer)
	.delete(lecturerController.deleteLecturer);

module.exports = router;