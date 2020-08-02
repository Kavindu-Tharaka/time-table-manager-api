const Building = require('../models/Building');

exports.createBuilding = async (req, res) => {
    try {
        const insertedBuilding = await Building.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                building: insertedBuilding
            }
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
};