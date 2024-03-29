const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    lecturers: [{
        type: String,
        trim: true,
        required: [true, "lecturers are mandotory for session!"]
    }],
    tag: {
        type: String,
        trim: true,
        required: [true,'tag for session is mendotory!']
    },
    studentGroup:{
        type:String,
        // trim:true,
        required:[true,'student group is mandotory for session!']
    },
    subject:{
        type:String,
        trim:true,
        required:[true,'subject is mandotory for session!']
    },
    numberOfStudents:{
        type:Number,
        // trim:true,
        required:[true,'number of student is madotory for session!']
    },
    duration:{
        type:Number,
        trim:true,
        required:[true,'duration is madotory for session!'],
    },
    asString:{
        type: String,
        trim:true,
        required:[true,'add string values'],
    }
});

const Session = mongoose.model("sessions", sessionSchema);
module.exports = Session;