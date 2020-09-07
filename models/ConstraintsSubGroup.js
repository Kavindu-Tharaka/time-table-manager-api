
const mongoose = require("mongoose");
const SubGroupID = require('./SubGroupID');

const Schema = mongoose.Schema;

const ConstraintsSubGroupSchema = new Schema({
    subgroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: SubGroupID,
        required: [true, 'SubGroup ID is Mandatory!'],
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

const ConstraintsSubGroup = mongoose.model('constraintssubgroup', ConstraintsSubGroupSchema);
module.exports = ConstraintsSubGroup;