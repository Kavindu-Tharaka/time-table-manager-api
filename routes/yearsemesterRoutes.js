const express = require('express');
const yearsemesterController = require('../controllers/yearsemesterController');

const router = express.Router();

router
    .route('/')
    .post(yearsemesterController.createYearSemester)
    .get(yearsemesterController.getAllYearSemesters);

router
    .route('/:id')
    .get(yearsemesterController.getYearSemester)
    .patch(yearsemesterController.updateYearSemester)
    .delete(yearsemesterController.deleteYearSemester);


module.exports = router;
