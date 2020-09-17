const express = require('express');
const constraintssessionController = require('../controllers/constraintssessionController');

const router = express.Router();

router
	.route('/')
	.post(constraintssessionController.createConstraintsSession)
	.get(constraintssessionController.getAllConstraintsSessions);

router
	.route('/:id')
	.get(constraintssessionController.getConstraintsSession)
	.patch(constraintssessionController.updateConstraintsSession)
	.delete(constraintssessionController.deleteConstraintsSession);

router
	.route('/session/:id')
	.get(constraintssessionController.getConstraintsOfOneSession)

module.exports = router;
