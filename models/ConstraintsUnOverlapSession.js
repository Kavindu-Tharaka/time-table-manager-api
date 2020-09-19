const mongoose = require('mongoose');
const Session = require('./Sessions');

const Schema = mongoose.Schema;

const ConstraintsUnOverlapSessionSchema = new Schema({

    year: {
        type: Number,
        min: 1,
        max: 4,
        required: [true, 'Year is Mandatory!']
    },
    semester: {
        type: Number,
        min: 1,
        max: 2,
        required: [true, 'Semester is Mandatory!']
    },
    unoverlapsessions: [{
        type: Schema.Types.ObjectId,
        ref: Session,
        trim: true,
        required: [true, 'Enter at Least one Session ID!']
    }],
    date: {
        type: Date,
        default: Date.now(),
    }
    
});

module.exports = mongoose.model('constraintsunoverlapSession', ConstraintsUnOverlapSessionSchema);