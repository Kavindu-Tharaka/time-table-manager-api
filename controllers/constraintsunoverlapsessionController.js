const ConstraintsUnOverlapSession = require('../models/ConstraintsUnOverlapSession');

exports.createConstraintsUnOverlapSession = async (req, res) => {
    try {
        const newConstraintsUnOverlapSession = await ConstraintsUnOverlapSession.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                constraintsUnOverlapSession: newConstraintsUnOverlapSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllConstraintsUnOverlapSessions = async (req, res) => {
    try {
        const query = ConstraintsUnOverlapSession.find(req.query).populate('unoverlapsessions');

        const constraintsUnOverlapSessions = await query;

        res.status(200).json({
            status: 'success',
            results: constraintsUnOverlapSessions.length,
            data: {
                constraintsUnOverlapSessions,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getConstraintsUnOverlapSession = async (req, res) => {
    try {
        const constraintsUnOverlapSession = await ConstraintsUnOverlapSession.findById(req.params.id).populate('unoverlapsessions');

        res.status(200).json({
            status: 'success',
            data: {
                constraintsUnOverlapSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateConstraintsUnOverlapSession = async (req, res) => {
    try {
        const constraintsUnOverlapSession = await ConstraintsUnOverlapSession.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                constraintsUnOverlapSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteConstraintsUnOverlapSession = async (req, res) => {
    try {
        await ConstraintsUnOverlapSession.findByIdAndDelete(req.params.id);

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