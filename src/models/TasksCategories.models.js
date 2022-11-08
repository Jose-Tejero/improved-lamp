const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const TasksCategories = db.define(
  "task_categories",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
      field: 'category_id',
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'id',
      },
      field: 'task_id',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TasksCategories;