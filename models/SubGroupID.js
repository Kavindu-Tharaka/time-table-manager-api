const mongoose = require("mongoose");

const subgroupidSchema = new mongoose.Schema({
  groupid: {
    type: String,
    trim: true,
    required: [true, "Group ID is Mandatory!"],
  },
  subgroupnumber: {
    type: Number,
    min:1,
    trim: true,
    required: [true, "Sub Group Number is Mandatory!"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const SubGroupID = mongoose.model("subgroupid", subgroupidSchema);
module.exports = SubGroupID;
