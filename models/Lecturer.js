const mongoose = require("mongoose");

const lecturerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Offered Year is Mandatory!"],
  },
  employeeId: {
    type: Number,
    trim: true,
    required: [true, "Offered Semester is Mandatory!"],
  },
  faculty: {
    type: String,
    trim: true,
    required: [true, "Subject Name is Mandatory!"],
  },
  department: {
    type: String,
    trim: true,
    required: [true, "Subject Code is Mandatory!"],
  },
  center: {
    type: String,
    trim: true,
    required: [true, "Num Of Lec Hrs are Mandatory!"],
  },
  building: {
    type: String,
    trim: true,
    required: [true, "Num Of Tutorial Hrs are Mandatory!"],
  },
  level: {
    type: Number,
    trim: true,
    required: [true, "Num Of Lab Hrs ares Mandatory!"],
  }
});

const Lecturer = mongoose.model("lecturers", lecturerSchema );
module.exports = Lecturer;