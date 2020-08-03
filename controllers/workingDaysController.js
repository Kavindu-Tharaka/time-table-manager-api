const WorkingDays = require("../models/workingDays");

exports.createWorkingDays = async (req, res) => {
  console.log("hello world");
  let { workingDayType, noOfWorkingDays, workingDay, timeSlot } = req.body;
  try {
    const newWorkingDays = new WorkingDays({
      workingDayType,
      noOfWorkingDays,
      workingDay,
      timeSlot,
    });

    const result = await newWorkingDays.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    res.send(error);
    console.error(error);
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

exports.getWorkingDay = async(req,res) => {
  try {
    const day = await WorkingDays.findById({_id : req.params.id});
    if(!day){
      res.send({msg : 'Working Day is Not available'})
      console.log(day)
    }
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}


exports.deleteWorkingDay = async(req,res) => {
  try {
    const isAvailable = await WorkingDays.findById({_id : req.params.id});
    if(!isAvailable){
      res.send({msg : 'Working Day is Not available'})
      console.log(isAvailable)
    }

    const day = await isAvailable.remove()
    res.send(day)
    console.log(day)
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}

exports.updateWorkingDay = async(req,res) => {
  let { workingDayType, noOfWorkingDays, workingDay, timeSlot } = req.body;

  try {
    const isAvailable = await WorkingDays.findById({_id : req.params.id});
    if(!isAvailable){
      res.send({msg : 'Working Day is Not available'})
      console.log(isAvailable)
    }

    isAvailable.set({
      workingDayType, 
      noOfWorkingDays, 
      workingDay, 
      timeSlot
    });

    const result = await isAvailable.save();
    res.send(result)
    console.log(result)

  } catch (error) {
    res.send(error)
    console.log(error)
  }
}





