const express = require('express');
const app = express();
const attendanceRoutes = require('./routes/attendanceRoutes');
const studentRoutes = require('./routes/studentRoutes');
const bodyParser = require('body-parser');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('attendance-report', 'root', 'RRRR@NNNN', {
  dialect: 'mysql',
  host: 'localhost'
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


app.use('/attendance', attendanceRoutes);
app.use('/student', studentRoutes);



app.get('/attendance-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'attendance-form.html'));
});


app.get('/attendance-report', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'attendance-report.html'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layout.html'));
});

sequelize
  .sync()
  .then(result => {
    console.log('Database synchronized successfully');
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch(err => {
    console.log('Error syncing database:', err);
  });