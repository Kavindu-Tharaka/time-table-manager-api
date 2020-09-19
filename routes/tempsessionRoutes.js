const express = require('express');
const tempSessionController = require('../controllers/tempSessionController');

const router = express.Router();

router
	.route('/')
	.post(tempSessionController.createTempSession)
	.get(tempSessionController.getAllTempSessions);

router
	.route('/:id')
	.get(tempSessionController.getTempSession)
	.patch(tempSessionController.updateTempSession)
	.delete(tempSessionController.deleteTempSession);

module.exports = router;
