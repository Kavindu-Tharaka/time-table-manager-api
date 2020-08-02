const express = require('express');
const subgroupnumberController = require('../controllers/subgroupnumberController');

const router = express.Router();

router
	.route('/')
	.post(subgroupnumberController.createSubGroupNumber)
	.get(subgroupnumberController.getAllSubGroupNumbers);

router
	.route('/:id')
	.get(subgroupnumberController.getSubGroupNumber)
	.patch(subgroupnumberController.updateSubGroupNumber)
	.delete(subgroupnumberController.deleteSubGroupNumber);

module.exports = router;
