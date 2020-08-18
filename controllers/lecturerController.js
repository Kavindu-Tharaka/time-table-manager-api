const Lecturer = require('../models/Lecturer');

exports.createLecturer = async (req, res) => {
    try {
        const newLecturer = await Lecturer.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                lecturer: newLecturer,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllLecturer = async (req, res) => {
    try {
        const query = Lecturer.find(req.query);

        const lecturers = await query;

        res.status(200).json({
            status: 'success',
            results: lecturers.length,
            data: {
                lecturers,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                lecturer,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                lecturer,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteLecturer = async (req, res) => {
    try {
        await Lecturer.findByIdAndDelete(req.params.id);

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
