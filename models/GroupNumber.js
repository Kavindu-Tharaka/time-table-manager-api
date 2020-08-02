const mongoose = require("mongoose");

const groupnumberSchema = new mongoose.Schema({
  groupnumber: {
    type: Number,
    min:1,
    trim: true,
    required: [true, "Group Number is Mandatory!"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const GroupNumber = mongoose.model("groupnumber", groupnumberSchema);
module.exports = GroupNumber;
