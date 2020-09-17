const ConstraintsLecturer = require('../models/ConstraintsLecturer');

exports.createConstraintsLecturer = async (req, res) => {
    try {

        const newConstraintsLecturer = await ConstraintsLecturer.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                constraintsLecturer: newConstraintsLecturer,
            },
        });
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllConstraintsLecturers = async (req, res) => {
    try {
        const query = ConstraintsLecturer.find(req.query).populate('lecturer');

        const constraintsLecturers = await query;

        res.status(200).json({
            status: 'success',
            results: constraintsLecturers.length,
            data: {
                constraintsLecturers,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getConstraintsLecturer = async (req, res) => {
    try {
        const constraintsLecturer = await ConstraintsLecturer.findById(req.params.id).populate('lecturer');

        res.status(200).json({
            status: 'success',
            data: {
                constraintsLecturer,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateConstraintsLecturer = async (req, res) => {
    try {
        const constraintsLecturer = await ConstraintsLecturer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                constraintsLecturer,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteConstraintsLecturer = async (req, res) => {
    try {
        await ConstraintsLecturer.findByIdAndDelete(req.params.id);

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

exports.getConstraintsOfOneLecturer = async (req, res) => {
    try {
        const constraintsLecturer = await ConstraintsLecturer.find({lecturer: req.params.id});

        res.status(200).json({
            status: 'success',
            data: {
                constraintsLecturer,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};