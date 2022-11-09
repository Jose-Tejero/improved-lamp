const UserServices = require('../services/users.services');

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next.log(error);
  }
};

const getUserWithAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinAddress(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUsersWithTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinTasks(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({ status: 418, errorContent: error, message: 'Revisar la información que se envía' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserWithAddress,
  getUsersWithTasks,
  createUser,
};