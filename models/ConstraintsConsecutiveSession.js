const mongoose = require('mongoose');
const Subject = require('./Subject');
const Session = require('./TempSession');

const Schema = mongoose.Schema;

const ConstraintsConsecutiveSessionSchema = new Schema({

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
    subject: {
        type: Schema.Types.ObjectId,
        ref: Subject,
        required: [true, 'Subject is Mandatory!']
    },
    consecutivesessions: [{
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

module.exports = mongoose.model('constraintsConsecutiveSession', ConstraintsConsecutiveSessionSchema);