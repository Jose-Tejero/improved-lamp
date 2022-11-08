const Users = require('../models/users.models');
const Address = require('../models/address.models');
const Categories = require('../models/categories.models');
const Tasks = require('../models/tasks.models');
const TasksCategories = require('../models/TasksCategories.models');

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({ attributes: ['id', 'username', 'email'] });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getById(id) {
    try {
      const result = await Users.findByPk(id, { attributes: ['id', 'username', 'email'] });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getUserJoinAddress(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ['id', 'username'],
        include: {
          model: Address,
          as: 'home',
          attributes: {
            exclude: ['id', 'userId', 'user_id'],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getUserJoinTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ['username'],
        include: {
          model: Tasks,
          as: 'task',
          attributes: ['title', 'description', 'is_complete'],
          include: {
            model: TasksCategories,
            as: 'category',
            attributes: ['category_id'],
            include: {
              model: Categories,
              as: 'category',
              attributes: ['name'],
            },
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async add (newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  };

};

module.exports = UserServices;