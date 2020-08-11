const Subject = require('../models/Subject');

exports.createSubject = async (req, res) => {
    try {
        const newSubject = await  Subject.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                subject: newSubject,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllSubject = async (req, res) => {
    try {
        const query = Subject.find(req.query);

        const subjects = await query;

        res.status(200).json({
            status: 'success',
            results: subjects.length,
            data: {
                subjects,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getSubject = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                subject,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                subject,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteSubject = async (req, res) => {
    try {
        await Subject.findByIdAndDelete(req.params.id);

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
