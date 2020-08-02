const mongoose = require("mongoose");

const specializationSchema = new mongoose.Schema({
  specializationname: {
    type: String,
    trim: true,
    required: [true, "Specialization Name is Mandatory!"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Specialization = mongoose.model("specialization", specializationSchema);
module.exports = Specialization;
