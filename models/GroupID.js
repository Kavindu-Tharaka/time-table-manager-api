const mongoose = require("mongoose");

const groupidSchema = new mongoose.Schema({
  yearsemestername: {
    type: String,
    trim: true,
    required: [true, "YearSemester is Mandatory!"],
  },
  specializationname: {
    type: String,
    trim: true,
    required: [true, "Specialization Name is Mandatory!"],
  },
  groupnumber: {
    type: Number,
    min:1,
    trim: true,
    required: [true, "GroupNumber is Mandatory!"],
  },
  groupid: {
    type: String,
    trim: true,
    required: [true, "Group ID is Mandatory!"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const GroupID = mongoose.model("groupid", groupidSchema);
module.exports = GroupID;
