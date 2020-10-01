const moment = require("moment");
const Session = require("../models/Sessions");
const TimeTable = require("../models/TimeTable");
const Room = require("../models/Room");

exports.getSession = async (req, res) => {
  try {
    console.log(req.body);
    const result = await Session.find();
    const halls = await Room.find();
    console.log(halls);
    console.log;
    const dataResult = [];
    result.forEach((element) => {
      const dep = element.studentGroup.split(".")[2];
      const sem = element.studentGroup.split(".")[1];
      element.studentGroup = element.studentGroup.split(".")[0];

      console.log("deeeep", dep);
      console.log("seeeeem", sem);

      if (
        element.studentGroup == req.body.year &&
        dep == req.body.department &&
        sem == req.body.semester
      ) {
        dataResult.push(element);
      }
    });

    let startTime = "8.30";
    let endTime = "10.30";

    console.log("-----------------", dataResult);
    const timeaTableData = [];

    let count = 0;
    let row = 0;
    for (let i = 0; i < 10; i++) {
      // console.log("----------------------",result[i].studentGroup.split('.')[0] == 'Y1')
      // console.log(c)
      if (count < 4) {
        const data = {
          time: startTime + "-" + endTime,
          monday: dataResult[row++],
          tuesday: dataResult[row++],
          wednesday: dataResult[row++],
          thursday: dataResult[row++],
          friday: dataResult[row++],
        };
        timeaTableData.push(data);
        count = 4;
        row = count + 1;
        startTime = moment(startTime, "H.mm").add(2, "hours").format("HH:mm");
        endTime = moment(endTime, "H.mm").add(2, "hours").format("HH:mm");
      } else {
        count = 0;
        continue;
      }
    }

    console.log(
      "-------------------------------------------------------------",
      timeaTableData
    );
    res.json(timeaTableData);
  } catch (error) {
    res.json(error);
  }
};

/*to get lecturer time table*/

exports.getLecturer = async (req, res) => {
  try {
    const result = await Session.find();
    const dataResult = [];
    result.forEach((element) => {
      const isAvailable = element.lecturers.includes(req.body.lecturer);
      if (isAvailable) {
        dataResult.push(element);
      }
    });

    let startTime = "8.30";
    let endTime = "10.30";

    //console.log("-----------------", dataResult);
    const timeaTableData = [];

    let count = 0;
    let row = 0;
    for (let i = 0; i < 10; i++) {
      // console.log("----------------------",result[i].studentGroup.split('.')[0] == 'Y1')
      // console.log(c)
      if (count < 4) {
        const data = {
          time: startTime + "-" + endTime,
          monday: dataResult[row++],
          tuesday: dataResult[row++],
          wednesday: dataResult[row++],
          thursday: dataResult[row++],
          friday: dataResult[row++],
        };
        timeaTableData.push(data);
        count = 4;
        row = count + 1;
        startTime = moment(startTime, "H.mm").add(2, "hours").format("HH:mm");
        endTime = moment(endTime, "H.mm").add(2, "hours").format("HH:mm");
      } else {
        count = 0;
        continue;
      }
    }

    console.log(timeaTableData);

    res.json(timeaTableData);
  } catch (error) {
    res.json(error);
  }
};

exports.generateTimeTable = async (req, res) => {
  try {
    req.body = {
      year: ["Y1", "Y2", "Y3", "Y4"],
      semester: ["S1", "S2"],
      department: ["SE", "IT", "DS", "CS", "ISE"],
    };

    // const result2 = await TimeTable.find()
    // console.log(result2)

    console.log(req.body);
    const result = await Session.find();
    const dataResult = [];
    const timeTable = [];

    result.forEach(async (element, index) => {
      try {
        const halls = await Room.find({ capacity: { $gte: 300 } });

        newElement = {
          lecturers: element.lecturers,
          subject: element.subject,
          hall: halls[0].roomName,
          studentGroup: element.studentGroup,
          tag: element.tag,
        };

        dataResult.push(newElement);
      } catch (error) {
        console.log(error);
      }
    });
    console.log(dataResult);

    res.json(dataResult);
  } catch (error) {
    console.log(error);
  }
};

// timeTable : [{
//   time : String,
//   monday : {
//       lecturers : {
//           type:[String]
//       },
//       subject: String,
//       hall : String,
//       studentGroup :String,
//       tag: String
//   },
//   tuesday : {
//       lecturers : {
//           type:[String]
//       },
//       subject: String,
//       hall : String,
//       studentGroup :String,
//       tag: String
//   },
//   wednesday : {
//       lecturers : {
//           type:[String]
//       },
//       subject: String,
//       hall : String,
//       studentGroup :String,
//       tag: String
//   },
//   thursday : {
//       lecturers : {
//           type:[String]
//       },
//       subject: String,
//       hall : String,
//       studentGroup :String,
//       tag: String
//   },
//   friday : {
//       lecturers : {
//           type:[String]
//       },
//       subject: String,
//       hall : String,
//       studentGroup :String,
//       tag: String
//   },
//   saturday : {
//       lecturers : {
//           type:[String]
//       },
//       subject: String,
//       hall : String,
//       studentGroup :String,
//       tag: String
//   },
//   sunday : {
//       lecturers : {
//           type:[String]
//       },
//       subject: String,
//       hall : String,
//       studentGroup :String,
//       tag: String
//   },
// }]
