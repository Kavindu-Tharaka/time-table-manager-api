const moment = require("moment");
const Session = require("../models/Sessions");

exports.getSession = async (req, res) => {
  try {
    console.log(req.body);
    const result = await Session.find();
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




    let startTime = "8.30"
    let endTime = "10.30"

   
    console.log("-----------------", dataResult);
    const timeaTableData = [];

    let count = 0;
    let row = 0;
    for (let i = 0; i < 10; i++) {
      // console.log("----------------------",result[i].studentGroup.split('.')[0] == 'Y1')
      // console.log(c)
      if (count < 4) {
        const data = {
          time: startTime+"-"+endTime,
          monday: dataResult[row++],
          tuesday: dataResult[row++],
          wednesday: dataResult[row++],
          thursday: dataResult[row++],
          friday: dataResult[row++],
        };
        timeaTableData.push(data);
        count = 4;
        row = count + 1;
        startTime = moment(startTime,'H.mm').add(2,'hours').format('HH:mm');
        endTime = moment(endTime,'H.mm').add(2,'hours').format('HH:mm');
      } else {
        count = 0;
        continue;
      }
    }

    // console.log(
    //   "-------------------------------------------------------------",
    //   timeaTableData
    // );
    res.json(timeaTableData);
  } catch (error) {
    res.json(error);
  }
};
