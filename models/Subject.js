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
  subjectName: {
    type: String,
    trim: true,
    required: [true, "Subject Name is Mandatory!"],
  },
  subjectCode: {
    type: String,
    trim: true,
    required: [true, "Subject Code is Mandatory!"],
  },
  numberOfLecHrs: {
    type: String,
    trim: true,
    required: [true, "Num Of Lec Hrs are Mandatory!"],
  },
  numberOfTutorialHrs: {
    type: String,
    trim: true,
    required: [true, "Num Of Tutorial Hrs are Mandatory!"],
  },
  numberOfLabHrs: {
    type: String,
    trim: true,
    required: [true, "Num Of Lab Hrs ares Mandatory!"],
  },
  numberOfEveluationHrs: {
    type: String,
    trim: true,
    required: [true, "Num Of Eveluation Hrs are Mandatory!"],
  }
});

const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;