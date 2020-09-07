const ConstraintsGroup = require('../models/ConstraintsGroup');

exports.createConstraintsGroup = async (req, res) => {
    try {
        const newConstraintsGroup = await ConstraintsGroup.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                constraintsGroup: newConstraintsGroup,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllConstraintsGroups = async (req, res) => {
    try {
        const query = ConstraintsGroup.find(req.query).populate('group');

        const constraintsGroups = await query;

        res.status(200).json({
            status: 'success',
            results: constraintsGroups.length,
            data: {
                constraintsGroups,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getConstraintsGroup = async (req, res) => {
    try {
        const constraintsGroup = await ConstraintsGroup.findById(req.params.id).populate('group');

        res.status(200).json({
            status: 'success',
            data: {
                constraintsGroup,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateConstraintsGroup = async (req, res) => {
    try {
        const constraintsGroup = await ConstraintsGroup.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                constraintsGroup,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteConstraintsGroup = async (req, res) => {
    try {
        await ConstraintsGroup.findByIdAndDelete(req.params.id);

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
