const express = require('express');
const constraintsconsecutivesessionController = require('../controllers/constraintconsecutivesessionController');

const router = express.Router();

router
	.route('/')
	.post(constraintsconsecutivesessionController.createConstraintsConsecutiveSession)
	.get(constraintsconsecutivesessionController.getAllConstraintsConsecutiveSessions);

router
	.route('/:id')
	.get(constraintsconsecutivesessionController.getConstraintsConsecutiveSession)
	.patch(constraintsconsecutivesessionController.updateConstraintsConsecutiveSession)
	.delete(constraintsconsecutivesessionController.deleteConstraintsConsecutiveSession);

module.exports = router;