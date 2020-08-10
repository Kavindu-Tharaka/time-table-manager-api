const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  offeredYear: {
    type: Number,
    trim: true,
    required: [true, "Offered Year is Mandatory!"],
  },
  offeredSemester: {
    type: String,
    trim: true,
    required: [true, "Offered Semester is Mandatory!"],
  },

});

const Subject = mongoose.model("tag", subjectSchema);
module.exports = Subject;