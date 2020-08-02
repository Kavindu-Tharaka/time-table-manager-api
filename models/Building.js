const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    buildingName: {
        type: String,
        required: [true, 'Please enter the building name']
    }
});

const Building = mongoose.model('buildings', buildingSchema);
module.exports = Building;