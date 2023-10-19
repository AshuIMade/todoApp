const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstName: {
    type: DataTypes.STRING,
    required: [true, 'Please add your first name']
  },
  lastName: {
    type: DataTypes.STRING,
    required: [true, 'Please add your last name']
  },
  email: {
    type: DataTypes.STRING,
    required: [true, 'Please add your email name'],
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    required: [true, 'Please set password']
  }    
  })
  return User;
}