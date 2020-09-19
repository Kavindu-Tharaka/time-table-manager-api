const mongoose = require('mongoose');

const tempSessionSchema = mongoose.Schema({

    lecturers: [{
        type: String
    }],
    subject: {
        type: String
    },
    subjectcode: {
        type: String
    },
    tag: {
        type: String
    },
    grouporsubgroupid: {
        type: String
    },
    studentcount: {
        type: Number
    },
    duration: {
        type: Number
    },
    asstring: {
        type: String // methanata dana sample string ekak :- "Disni Sriyarathna, Banuka Perera / MAD(IT2080) / Lecture / Y2.S2.IT.07"
    },
});

module.exports = mongoose.model('tempSession', tempSessionSchema);