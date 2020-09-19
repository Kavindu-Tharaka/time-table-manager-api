const ConstraintsConsecutiveSession = require('../models/ConstraintsConsecutiveSession');

exports.createConstraintsConsecutiveSession = async (req, res) => {
    try {
        const newConstraintsConsecutiveSession = await ConstraintsConsecutiveSession.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                constraintsConsecutiveSession: newConstraintsConsecutiveSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllConstraintsConsecutiveSessions = async (req, res) => {
    try {
        const query = ConstraintsConsecutiveSession.find(req.query).populate('consecutivesessions subject');

        const constraintsConsecutiveSessions = await query;

        res.status(200).json({
            status: 'success',
            results: constraintsConsecutiveSessions.length,
            data: {
                constraintsConsecutiveSessions,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getConstraintsConsecutiveSession = async (req, res) => {
    try {
        const constraintsConsecutiveSession = await ConstraintsConsecutiveSession.findById(req.params.id).populate('consecutivesessions subject');

        res.status(200).json({
            status: 'success',
            data: {
                constraintsConsecutiveSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateConstraintsConsecutiveSession = async (req, res) => {
    try {
        const constraintsConsecutiveSession = await ConstraintsConsecutiveSession.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                constraintsConsecutiveSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteConstraintsConsecutiveSession = async (req, res) => {
    try {
        await ConstraintsConsecutiveSession.findByIdAndDelete(req.params.id);

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