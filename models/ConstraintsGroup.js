
const mongoose = require("mongoose");
const GroupID = require('./GroupID');

const Schema = mongoose.Schema;

const ConstraintsGroupSchema = new Schema({
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: GroupID,
        required: [true, 'Group ID is Mandatory!'],
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

const ConstraintsGroup = mongoose.model('constraintsgroup', ConstraintsGroupSchema);
module.exports = ConstraintsGroup;