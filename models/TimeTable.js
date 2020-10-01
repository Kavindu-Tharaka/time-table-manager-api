const mongoose = require('mongoose');

const timeTableSchema = new mongoose.Schema({
    timeTable : [{
        time : String,
        monday : {
            lecturers : {
                type:[String]
            },
            subject: String,
            hall : String,
            studentGroup :String,
            tag: String
        },
        tuesday : {
            lecturers : {
                type:[String]
            },
            subject: String,
            hall : String,
            studentGroup :String,
            tag: String
        },
        wednesday : {
            lecturers : {
                type:[String]
            },
            subject: String,
            hall : String,
            studentGroup :String,
            tag: String
        },
        thursday : {
            lecturers : {
                type:[String]
            },
            subject: String,
            hall : String,
            studentGroup :String,
            tag: String
        },
        friday : {
            lecturers : {
                type:[String]
            },
            subject: String,
            hall : String,
            studentGroup :String,
            tag: String
        },
        saturday : {
            lecturers : {
                type:[String]
            },
            subject: String,
            hall : String,
            studentGroup :String,
            tag: String
        },
        sunday : {
            lecturers : {
                type:[String]
            },
            subject: String,
            hall : String,
            studentGroup :String,
            tag: String
        },
    }]
})

const TimeTable = mongoose.model("timetable", timeTableSchema);
module.exports = TimeTable;