const express = require('express');
const groupidController = require('../controllers/groupidController');

const router = express.Router();

router
	.route('/')
	.post(groupidController.createGroupID)
	.get(groupidController.getAllGroupIDs);

router
	.route('/:id')
	.get(groupidController.getGroupID)
	.patch(groupidController.updateGroupID)
	.delete(groupidController.deleteGroupID);

module.exports = router;
