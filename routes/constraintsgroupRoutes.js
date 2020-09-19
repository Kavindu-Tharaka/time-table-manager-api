const express = require('express');
const constraintsgroupController = require('../controllers/constraintsgroupController');

const router = express.Router();

router
	.route('/')
	.post(constraintsgroupController.createConstraintsGroup)
	.get(constraintsgroupController.getAllConstraintsGroups);

router
	.route('/:id')
	.get(constraintsgroupController.getConstraintsGroup)
	.patch(constraintsgroupController.updateConstraintsGroup)
	.delete(constraintsgroupController.deleteConstraintsGroup);

router
	.route('/group/:id')
	.get(constraintsgroupController.getConstraintsOfOneGroup)

module.exports = router;
