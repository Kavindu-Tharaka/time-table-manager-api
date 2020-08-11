const express = require('express');
const subjectController = require('../controllers/subjectController');

const router = express.Router();

router
	.route('/')
	.post(subjectController.createSubject)
	.get(subjectController.getAllSubject);

router
	.route('/:id')
	.get(subjectController.getSubject)
	.patch(subjectController.updateSubject)
	.delete(subjectController.deleteSubject);

module.exports = router;