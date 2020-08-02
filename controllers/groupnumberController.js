const GroupNumber = require('../models/GroupNumber');

exports.createGroupNumber = async (req, res) => {
    try {
        const newGroupNumber = await GroupNumber.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                groupnumber: newGroupNumber,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllGroupNumbers = async (req, res) => {
    try {
        const query = GroupNumber.find(req.query);

        const groupnumbers = await query;

        res.status(200).json({
            status: 'success',
            results: groupnumbers.length,
            data: {
                groupnumbers,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getGroupNumber = async (req, res) => {
    try {
        const groupnumber = await GroupNumber.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                groupnumber,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateGroupNumber = async (req, res) => {
    try {
        const groupnumber = await GroupNumber.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                groupnumber,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteGroupNumber = async (req, res) => {
    try {
        await GroupNumber.findByIdAndDelete(req.params.id);

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
