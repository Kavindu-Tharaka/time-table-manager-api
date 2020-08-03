const express = require('express')
const router = express.Router()
const workingDaysController = require('../controllers/workingDaysController')

router.route('/').post(workingDaysController.createWorkingDays);
router.route('/').get(workingDaysController.getAllWorkingDays);
router.route('/:id').get(workingDaysController.getWorkingDay)
router.route('/:id').delete(workingDaysController.deleteWorkingDay)
router.route('/:id').put(workingDaysController.updateWorkingDay)

module.exports = router

