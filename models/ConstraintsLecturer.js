
const mongoose = require("mongoose");
const Lecturer = require('../models/Lecturer');

const Schema = mongoose.Schema;

const ConstraintsLecturerSchema = new Schema({
    lecturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Lecturer,
        required: [true, 'Lecturer is Mandatory!'],
    },
    day: {
        type: String,
        trim: true,
        required: [true, 'Day is Mandatory!']
    },
    from: {
        type: String,
        trim: true,
        required: [true, 'From time is Mandatory!']
    },
    to: {
        type: String,
        trim: true,
        required: [true, 'To time is Mandatory!']
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

const ConstraintsLecturer = mongoose.model('constraintslecturer', ConstraintsLecturerSchema);
module.exports = ConstraintsLecturer;