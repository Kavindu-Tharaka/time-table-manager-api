const TempSession = require('../models/TempSession');

exports.createTempSession = async (req, res) => {
    try {
        const newTempSession = await TempSession.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                tempSession: newTempSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllTempSessions = async (req, res) => {
    try {
        const query = TempSession.find(req.query);

        const tempSessions = await query;

        res.status(200).json({
            status: 'success',
            results: tempSessions.length,
            data: {
                tempSessions,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getTempSession = async (req, res) => {
    try {
        const tempSession = await TempSession.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                tempSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateTempSession = async (req, res) => {
    try {
        const tempSession = await TempSession.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                tempSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteTempSession = async (req, res) => {
    try {
        await TempSession.findByIdAndDelete(req.params.id);

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
