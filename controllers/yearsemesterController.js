const YearSemester = require('../models/YearSemester');

exports.createYearSemester = async (req, res) => {
    try {
        const newYearSemester = await YearSemester.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                yearsemester: newYearSemester,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllYearSemesters = async (req, res) => {
    try {
        const query = YearSemester.find(req.query);

        const yearsemesters = await query;

        res.status(200).json({
            status: 'success',
            results: yearsemesters.length,
            data: {
                yearsemesters,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getYearSemester = async (req, res) => {
    try {
        const yearsemester = await YearSemester.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                yearsemester,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateYearSemester = async (req, res) => {
    try {
        const yearsemester = await YearSemester.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                yearsemester,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteYearSemester = async (req, res) => {
    try {
        await YearSemester.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};
