const ConstraintsSession = require('../models/ConstraintsSession');

exports.createConstraintsSession = async (req, res) => {
    try {
        const newConstraintsSession = await ConstraintsSession.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                constraintsSession: newConstraintsSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllConstraintsSessions = async (req, res) => {
    try {
        const query = ConstraintsSession.find(req.query).populate('session');

        const constraintsSessions = await query;

        res.status(200).json({
            status: 'success',
            results: constraintsSessions.length,
            data: {
                constraintsSessions,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getConstraintsSession = async (req, res) => {
    try {
        const constraintsSession = await ConstraintsSession.findById(req.params.id).populate('session');

        res.status(200).json({
            status: 'success',
            data: {
                constraintsSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateConstraintsSession = async (req, res) => {
    try {
        const constraintsSession = await ConstraintsSession.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                constraintsSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteConstraintsSession = async (req, res) => {
    try {
        await ConstraintsSession.findByIdAndDelete(req.params.id);

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
