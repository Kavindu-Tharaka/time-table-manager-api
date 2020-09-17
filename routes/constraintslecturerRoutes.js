const express = require('express');
const constraintslecturerController = require('../controllers/constraintslecturerController');

const router = express.Router();

router
	.route('/')
	.post(constraintslecturerController.createConstraintsLecturer)
	.get(constraintslecturerController.getAllConstraintsLecturers);

router
	.route('/:id')
	.get(constraintslecturerController.getConstraintsLecturer)
	.patch(constraintslecturerController.updateConstraintsLecturer)
	.delete(constraintslecturerController.deleteConstraintsLecturer);

router
	.route('/lecturer/:id')
	.get(constraintslecturerController.getConstraintsOfOneLecturer)


module.exports = router;
