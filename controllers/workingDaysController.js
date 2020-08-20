const WorkingDays = require("../models/workingDays");

exports.createWorkingDays = async (req, res) => {
  console.log(req);
  let {
    dayType,
    noOfWorkingDays,
    dayOfWork,
    timeSlot,
    fromTime,
    toTime,
    workingHours,
    workingMins,
  } = req.body;
  try {
    const newWorkingDays = new WorkingDays({
      dayType,
      noOfWorkingDays,
      dayOfWork,
      timeSlot:workingHours + ":" + workingMins,
      fromTime,
      toTime,
      workingHours,
      workingMins,
    });

    const result = await newWorkingDays.save();
    // console.log(result);
    res.send(result);
  } catch (error) {
    res.send(error);
    console.error("These Are the errors in console", error);
  }
};

exports.getAllWorkingDays = async (req, res) => {
  try {
    const allWorkingDays = await WorkingDays.find();
    res.send(allWorkingDays);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.getWorkingDay = async (req, res) => {
  try {
    const day = await WorkingDays.findById({ _id: req.params.id });
    if (!day) {
      res.send({ msg: "Working Day is Not available" });
      console.log(day);
    }
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

exports.deleteWorkingDay = async (req, res) => {
  try {
    const isAvailable = await WorkingDays.findById({ _id: req.params.id });
    if (!isAvailable) {
      res.send({ msg: "Working Day is Not available" });
      console.log(isAvailable);
    }

    const day = await isAvailable.remove();
    res.send(day);
    console.log(day);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

exports.updateWorkingDay = async (req, res) => {
  console.log(req)
  console.log(req.params.id )
  let {
    dayType,
    noOfWorkingDays,
    dayOfWork,
    timeSlot,
    fromTime,
    toTime,
    workingHours,
    workingMins,
  } = req.body

  try {
    const isAvailable = await WorkingDays.findById({ _id: req.params.id });
    if (!isAvailable) {
      res.send({ msg: "Working Day is Not available" });
      console.log(isAvailable);
    }

    isAvailable.set({
      dayType,
      noOfWorkingDays,
      dayOfWork,
      timeSlot:workingHours + ":" + workingMins,
      fromTime,
      toTime,
      workingHours,
      workingMins,
    });

    const result = await isAvailable.save();
    res.send(result);
    console.log(result);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};


exports.getDayTypeCount = async (req, res) => {
  try {
    const count = await WorkingDays.find({dayType : req.params.type}).count();
    res.json(count)
  } catch (error) {
    res.json(count)
  }
}