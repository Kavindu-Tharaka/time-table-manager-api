const mongoose = require('mongoose');
const Subject = require('./Subject');
const Session = require('./Sessions');

const Schema = mongoose.Schema;

const ConstraintsConsecutiveSessionSchema = new Schema({

    year: {
        type: Number,
        min: 1,
        max: 4,
    },
    semester: {
        type: Number,
        min: 1,
        max: 2,
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: Subject,
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