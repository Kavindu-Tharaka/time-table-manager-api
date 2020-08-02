const express = require('express');
const groupnumberController = require('../controllers/groupnumberController');

const router = express.Router();

router
	.route('/')
	.post(groupnumberController.createGroupNumber)
	.get(groupnumberController.getAllGroupNumbers);

router
	.route('/:id')
	.get(groupnumberController.getGroupNumber)
	.patch(groupnumberController.updateGroupNumber)
	.delete(groupnumberController.deleteGroupNumber);

module.exports = router;
