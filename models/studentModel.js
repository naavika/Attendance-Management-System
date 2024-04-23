const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:password@localhost:3306/database');

const Student = sequelize.define('Student', {
    // Define model attributes
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rollNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Student;
