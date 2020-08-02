const express = require('express');
const specializationController = require('../controllers/specializationController');

const router = express.Router();

router
	.route('/')
	.post(specializationController.createSpecialization)
	.get(specializationController.getAllSpecializations);

router
	.route('/:id')
	.get(specializationController.getSpecialization)
	.patch(specializationController.updateSpecialization)
	.delete(specializationController.deleteSpecialization);

module.exports = router;
