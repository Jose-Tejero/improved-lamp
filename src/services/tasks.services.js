const Tasks = require("../models/tasks.models");
const TasksCategories = require("../models/TasksCategories.models");

class TasksServices {
  static async getAll() {
    try {
      const result = await Tasks.findAll({ attributes: ['title', 'description', 'isComplete', 'userId'] });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getById(userId) {
    try {
      const result = await Tasks.findAll({ where: { userId } });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async postOne(newTask, categories) {
    try {
      const result = await Tasks.create(newTask);
      const { id } = result;
      categories.forEach(async (category) => await TasksCategories.create({ categoryId: category, taskId: id }));
      return true;
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