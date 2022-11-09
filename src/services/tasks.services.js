const Tasks = require("../models/tasks.models");

class TasksServices {
  static async getAll() {
    try {
      const result = await Tasks.findAll({ attributes: ['title', 'description', 'isComplete', 'userId'] });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async postOne(newTask) {
    try {
      const result = await Tasks.create(newTask);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async deleteOne(id) {
    try {
      return await Tasks.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  };

  static async updateTask(id, isComplete) {
    try {
      const result = await Tasks.update(isComplete, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  };

};

module.exports = TasksServices;