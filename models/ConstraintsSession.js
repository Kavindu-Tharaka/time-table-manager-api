
const mongoose = require("mongoose");
const Session = require('./Sessions');

const Schema = mongoose.Schema;

const ConstraintsSessionSchema = new Schema({
    year: {
        type: Number,
        trim: true,
    },
    semester: {
        type: Number,
        trim: true,
    },
    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Session,
        required: [true, 'Session ID is Mandatory!'],
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
    sessionasstring: {
        type: String,
        trim: true,
        required: [true, 'Session as a string is Mandatory!']
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

const ConstraintsSession = mongoose.model('constraintssession', ConstraintsSessionSchema);
module.exports = ConstraintsSession;