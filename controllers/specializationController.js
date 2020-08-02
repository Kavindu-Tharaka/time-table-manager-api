const Specialization = require('../models/Specialization');

exports.createSpecialization = async (req, res) => {
    try {
        const newSpecialization = await Specialization.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                specialization: newSpecialization,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllSpecializations = async (req, res) => {
    try {
        const query = Specialization.find(req.query);

        const specializations = await query;

        res.status(200).json({
            status: 'success',
            results: specializations.length,
            data: {
                specializations,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getSpecialization = async (req, res) => {
    try {
        const specialization = await Specialization.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                specialization,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.updateSpecialization = async (req, res) => {
    try {
        const specialization = await Specialization.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: {
                specialization,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteSpecialization = async (req, res) => {
    try {
        await Specialization.findByIdAndDelete(req.params.id);

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
