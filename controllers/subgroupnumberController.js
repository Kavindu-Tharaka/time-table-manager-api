const SubGroupNumber = require('../models/SubGroupNumber');

exports.createSubGroupNumber = async (req, res) => {
    try {
        const newSubGroupNumber = await SubGroupNumber.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                subgroupnumber: newSubGroupNumber,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllSubGroupNumbers = async (req, res) => {
    try {
        const query = SubGroupNumber.find(req.query);

        const subgroupnumbers = await query;

        res.status(200).json({
            status: 'success',
            results: subgroupnumbers.length,
            data: {
                subgroupnumbers,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getSubGroupNumber = async (req, res) => {
    try {
        const subgroupnumber = await SubGroupNumber.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                subgroupnumber,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateSubGroupNumber = async (req, res) => {
    try {
        const subgroupnumber = await SubGroupNumber.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                subgroupnumber,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteSubGroupNumber = async (req, res) => {
    try {
        await SubGroupNumber.findByIdAndDelete(req.params.id);

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
