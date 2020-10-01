const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    buildingName: {
        type: String,
        required: [true, 'Please enter the building name']
    }
});

const Building = mongoose.model('building', buildingSchema);
module.exports = Building;