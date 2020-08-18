const express = require('express');
const buildingController = require('../controllers/buildingController');

const router = express.Router();

router
	.route('/')
	.post(buildingController.createBuilding)
	.get(buildingController.getAllBuildings);

router
	.route('/:id')
	.get(buildingController.getBuilding)
	.patch(buildingController.updateBuilding)
	.delete(buildingController.deleteBuilding);

module.exports = router;
