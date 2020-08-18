const express = require('express')
const router = express.Router()
const workingDaysController = require('../controllers/workingDaysController')

router.route('/').post(workingDaysController.createWorkingDays);
router.route('/').get(workingDaysController.getAllWorkingDays);
router.route('/:id').get(workingDaysController.getWorkingDay);
router.route('/:id').delete(workingDaysController.deleteWorkingDay);
router.route('/:id').patch(workingDaysController.updateWorkingDay);
router.route('/type/count/:type').get(workingDaysController.getDayTypeCount);


module.exports = router

