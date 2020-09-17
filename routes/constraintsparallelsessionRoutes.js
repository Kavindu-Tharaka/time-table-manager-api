const express = require('express');
const constraintsparallelsessionController = require('../controllers/constraintsparallelsessionController');

const router = express.Router();

router
	.route('/')
	.post(constraintsparallelsessionController.createConstraintsParallelSession)
	.get(constraintsparallelsessionController.getAllConstraintsParallelSessions);

router
	.route('/:id')
	.get(constraintsparallelsessionController.getConstraintsParallelSession)
	.patch(constraintsparallelsessionController.updateConstraintsParallelSession)
	.delete(constraintsparallelsessionController.deleteConstraintsParallelSession);

module.exports = router;