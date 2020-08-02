const express = require('express');
const subgroupidController = require('../controllers/subgroupidController');

const router = express.Router();

router
	.route('/')
	.post(subgroupidController.createSubGroupID)
	.get(subgroupidController.getAllSubGroupIDs);

router
	.route('/:id')
	.get(subgroupidController.getSubGroupID)
	.patch(subgroupidController.updateSubGroupID)
	.delete(subgroupidController.deleteSubGroupID);

module.exports = router;
