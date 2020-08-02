const SubGroupID = require('../models/SubGroupID');

exports.createSubGroupID = async (req, res) => {
    try {
        const newSubGroupID = await SubGroupID.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                subgroupid: newSubGroupID,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllSubGroupIDs = async (req, res) => {
    try {
        const query = SubGroupID.find(req.query);

        const subgroupids = await query;

        res.status(200).json({
            status: 'success',
            results: subgroupids.length,
            data: {
                subgroupids,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getSubGroupID = async (req, res) => {
    try {
        const subgroupid = await SubGroupID.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                subgroupid,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateSubGroupID = async (req, res) => {
    try {
        const subgroupid = await SubGroupID.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                subgroupid,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteSubGroupID = async (req, res) => {
    try {
        await SubGroupID.findByIdAndDelete(req.params.id);

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
