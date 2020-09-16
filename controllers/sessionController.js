const Session= require('../models/Sessions');


exports.createSession = async (req, res) => {
    try {
        const newSession = await Session.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                session: newSession,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllSessions = async (req, res) => {
    try {
        const query = Session.find(req.query);

        const sessions = await query;

        res.status(200).json({
            status: 'success',
            results: sessions.length,
            data: {
                sessions,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getSession = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                session,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateSession = async (req, res) => {
    try {
        const session = await Session.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                session,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteSession = async (req, res) => {
    try {
        await Session.findByIdAndDelete(req.params.id);

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
