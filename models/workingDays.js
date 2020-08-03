const mongoose = require('mongoose')

const workingDaysSchema = mongoose.Schema({
    workingDayType : {
        type: String,
        required: true
    },
    noOfWorkingDays:{
        type: Number,
        required: true
    },
    workingDay:{
        type : [Object],
        required: true
    },
    timeSlot : {
        type : String
    }

});



module.exports = WorkingDays = mongoose.model('WorkingDays', workingDaysSchema);




//required are commented only for testing purposes