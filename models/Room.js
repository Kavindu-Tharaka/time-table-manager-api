const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    building: {
        type: mongoose.Schema.ObjectId,
        ref: 'Building',
        required: [true, 'Please enter the building']
    },
    roomName: {
        type: String,
        required: [true, 'Please enter the room name']
    },
    floor: {
        type: Number,
        required: [true, 'Please enter the floor']
    },
    capacity: {
        type: Number,
        required: [true, 'Please enter the room capacity']
    },
    roomType: {
        type: String,
        enum: ['lecture-hall', 'laboratory'],
        required: [true, 'Please enter the room type']
    },

});

const Room = mongoose.model('rooms', roomSchema);
module.exports = Room;