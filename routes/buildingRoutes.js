const express = require('express');
const buildingController = require('../controllers/buildingController');

const router = express.Router();

router.route('/').post(buildingController.createBuilding);

module.exports = router;