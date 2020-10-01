const ConstraintsParallelSession = require('../models/ConstraintsParallelSession');

exports.createConstraintsParallelSession = async (req, res) => {
    try {
        const newConstraintsParallelSession = await ConstraintsParallelSession.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                constraintsParallelSession: newConstraintsParallelSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllConstraintsParallelSessions = async (req, res) => {
    try {
        const query = ConstraintsParallelSession.find(req.query).populate('parallelsessions');

        const constraintsParallelSessions = await query;

        res.status(200).json({
            status: 'success',
            results: constraintsParallelSessions.length,
            data: {
                constraintsParallelSessions,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getConstraintsParallelSession = async (req, res) => {
    try {
        const constraintsParallelSession = await ConstraintsParallelSession.findById(req.params.id).populate('parallelsessions');

        res.status(200).json({
            status: 'success',
            data: {
                constraintsParallelSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateConstraintsParallelSession = async (req, res) => {
    try {
        const constraintsParallelSession = await ConstraintsParallelSession.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                constraintsParallelSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteConstraintsParallelSession = async (req, res) => {
    try {
        await ConstraintsParallelSession.findByIdAndDelete(req.params.id);

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