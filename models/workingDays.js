const mongoose = require('mongoose')

const workingDaysSchema = mongoose.Schema({
    dayType : {
        type: String,
        required: true
    },
    noOfWorkingDays:{
        type: Number,
        required: true
    },
    dayOfWork:{
        type : String,
        required: true
    },
    timeSlot : {
        type : String
    },
    fromTime : {
        type : String
    },
    toTime: {
        type : String
    },
    workingHours : {
        type : String
    },
    workingMins : {
        type : String
    }

});



module.exports = WorkingDays = mongoose.model('WorkingDays', workingDaysSchema);




//required are commented only for testing purposes