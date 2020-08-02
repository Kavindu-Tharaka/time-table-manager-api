const mongoose = require("mongoose");

const yearsemesterSchema = new mongoose.Schema({
  yearsemestername: {
    type: String,
    trim: true,
    required: [true, "YearSemester is Mandatory!"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const YearSemester = mongoose.model("yearsemester", yearsemesterSchema);
module.exports = YearSemester;
