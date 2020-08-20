const mongoose = require("mongoose");

const lecturerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name is Mandatory!"],
  },
  employeeId: {
    type: Number,
    trim: true,
    required: [true, "EmpId  is Mandatory!"],
  },
  faculty: {
    type: String,
    trim: true,
    required: [true, "Faculty Name is Mandatory!"]
  },
  department: {
    type: String,
    trim: true,
    required: [true, "Department Code is Mandatory!"]
  },
  center: {
    type: String,
    trim: true,
    required: [true, "Center Mandatory!"]
  },
  building: {
    type: String,
    trim: true,
    required: [true, "Building is Mandatory!"]
  },
  level: {
    type: String,
    trim: true,
    required: [true, "Level is Mandatory!"],
  },
  rankVal: {
    type: String,
    trim: true
  }
});

const Lecturer = mongoose.model("lecturers", lecturerSchema );
