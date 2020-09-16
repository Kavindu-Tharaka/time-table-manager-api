const express = require('express');
const SessionController = require('../controllers/sessionController');

const router = express.Router();

router
	.route('/')
	.post(SessionController.createSession)
	.get(SessionController.getAllSessions);

router
	.route('/:id')
	.get(SessionController.getSession)
	.patch(SessionController.updateSession)
	.delete(SessionController.deleteSession);

module.exports = router;