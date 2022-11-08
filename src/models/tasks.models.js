const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');

const Tasks = db.define('tasks', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    field: "is_complete"
  },
  userId : {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: 'id',
      model: Users,
    },
    field: 'user_id',
  }
});

module.exports = Tasks;