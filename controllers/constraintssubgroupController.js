const ConstraintsSubGroup = require('../models/ConstraintsSubGroup');

exports.createConstraintsSubGroup = async (req, res) => {
    try {
        const newConstraintsSubGroup = await ConstraintsSubGroup.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                constraintsSubGroup: newConstraintsSubGroup,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllConstraintsSubGroups = async (req, res) => {
    try {
        const query = ConstraintsSubGroup.find(req.query).populate('subgroup');

        const constraintsSubGroups = await query;

        res.status(200).json({
            status: 'success',
            results: constraintsSubGroups.length,
            data: {
                constraintsSubGroups,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getConstraintsSubGroup = async (req, res) => {
    try {
        const constraintsSubGroup = await ConstraintsSubGroup.findById(req.params.id).populate('subgroup');

        res.status(200).json({
            status: 'success',
            data: {
                constraintsSubGroup,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateConstraintsSubGroup = async (req, res) => {
    try {
        const constraintsSubGroup = await ConstraintsSubGroup.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                constraintsSubGroup,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteConstraintsSubGroup = async (req, res) => {
    try {
        await ConstraintsSubGroup.findByIdAndDelete(req.params.id);

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
