const GroupID = require('../models/GroupID');

exports.createGroupID = async (req, res) => {
    try {
        const newGroupID = await GroupID.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                groupid: newGroupID,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllGroupIDs = async (req, res) => {
    try {
        const query = GroupID.find(req.query);

        const groupids = await query;

        res.status(200).json({
            status: 'success',
            results: groupids.length,
            data: {
                groupids,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getGroupID = async (req, res) => {
    try {
        const groupid = await GroupID.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                groupid,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateGroupID = async (req, res) => {
    try {
        const groupid = await GroupID.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                groupid,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteGroupID = async (req, res) => {
    try {
        await GroupID.findByIdAndDelete(req.params.id);

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
