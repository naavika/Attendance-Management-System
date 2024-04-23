const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:RRRR@NNNN@localhost:3306/attendance-report');

const Attendance = sequelize.define('Attendance', {
    // Define model attributes
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Attendance;
