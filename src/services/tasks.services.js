const Tasks = require("../models/tasks.models");

class TasksServices {
  static async getAll() {
    try {
      const result = await Tasks.findAll();
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
      const result = await Tasks.findByPk(id);
      await result.destroy();
    } catch (error) {
      throw error;
    }
  };

  static async updateTask(id, isComplete) {
    try {
      const result = await Tasks.update(isComplete, { where: id });
      return result;
    } catch (error) {
      throw error;
    }
  };

};

module.exports = TasksServices;