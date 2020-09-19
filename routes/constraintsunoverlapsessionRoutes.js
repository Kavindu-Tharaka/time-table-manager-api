const express = require('express');
const constraintsunoverlapsessionController = require('../controllers/constraintsunoverlapsessionController');

const router = express.Router();

router
	.route('/')
	.post(constraintsunoverlapsessionController.createConstraintsUnOverlapSession)
	.get(constraintsunoverlapsessionController.getAllConstraintsUnOverlapSessions);

router
	.route('/:id')
	.get(constraintsunoverlapsessionController.getConstraintsUnOverlapSession)
	.patch(constraintsunoverlapsessionController.updateConstraintsUnOverlapSession)
	.delete(constraintsunoverlapsessionController.deleteConstraintsUnOverlapSession);

module.exports = router;