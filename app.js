const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const resourcePrefix = '/api/v1';

// Importing routes from the routes folder
const buildingRoutes = require('./routes/buildingRoutes');
const tagRoutes = require('./routes/tagRoutes');
const yearsemesterRoutes = require('./routes/yearsemesterRoutes');
const specializationRoutes = require('./routes/specializationRoutes');
const groupnumberRoutes = require('./routes/groupnumberRoutes');
const subgroupnumberRoutes = require('./routes/subgroupnumberRoutes');
const groupidRoutes = require('./routes/groupidRoutes');
const subgroupidRoutes = require('./routes/subgroupidRoutes');
const roomRoutes = require('./routes/roomRoutes');
const workingDaysRoutes = require('./routes/workingDaysRoute');
const lecturerRoutes = require('./routes/lecturerRoute');
const subjectRoutes = require('./routes/subjectRoutes');

const constraintslecturerRoutes = require('./routes/constraintslecturerRoutes');
const constraintsgroupRoutes = require('./routes/constraintsgroupRoutes');
const constraintssubgroupRoutes = require('./routes/constraintssubgroupRoutes');
const constraintssessionRoutes = require('./routes/constraintssessionRoutes');

const tempsessionRoutes = require('./routes/tempsessionRoutes');

// Creating a Express application
const app = express();

// CORS support
app.use(cors());

// Setting body parser to get access of request.body
app.use(bodyParser.json());

// Logging all the requests to the console in development environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Setting the routes to the app as middlewares
app.use(`${resourcePrefix}/buildings`, buildingRoutes);
app.use(`${resourcePrefix}/tags`, tagRoutes);
app.use(`${resourcePrefix}/yearsemesters`, yearsemesterRoutes);
app.use(`${resourcePrefix}/specializations`, specializationRoutes);
app.use(`${resourcePrefix}/groupnumbers`, groupnumberRoutes);
app.use(`${resourcePrefix}/subgroupnumbers`, subgroupnumberRoutes);
app.use(`${resourcePrefix}/groupids`, groupidRoutes);
app.use(`${resourcePrefix}/subgroupids`, subgroupidRoutes);
app.use(`${resourcePrefix}/rooms`, roomRoutes);
app.use(`${resourcePrefix}/workingDays`, workingDaysRoutes);
app.use(`${resourcePrefix}/lecturers`,lecturerRoutes);
app.use(`${resourcePrefix}/subjects`,subjectRoutes);

app.use(`${resourcePrefix}/constraintslecturers`,constraintslecturerRoutes);
app.use(`${resourcePrefix}/constraintsgroups`,constraintsgroupRoutes);
app.use(`${resourcePrefix}/constraintssubgroups`,constraintssubgroupRoutes);
app.use(`${resourcePrefix}/constraintssessions`,constraintssessionRoutes);

app.use(`${resourcePrefix}/tempsessions`,tempsessionRoutes);

// Setting static webpage
app.use(express.static('./client'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

module.exports = app;
