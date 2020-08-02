const mongoose = require("mongoose");

const subgroupnumberSchema = new mongoose.Schema({
  subgroupnumber: {
    type: Number,
    min:1,
    trim: true,
    required: [true, "SubGroupNumber is Mandatory!"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const SubGroupNumber = mongoose.model("subgroupnumber", subgroupnumberSchema);
module.exports = SubGroupNumber;
