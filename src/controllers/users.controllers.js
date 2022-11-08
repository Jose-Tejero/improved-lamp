const UserServices = require('../services/users.services');

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUserWithAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinAddress(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getUsersWithTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserJoinTasks(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserWithAddress,
  getUsersWithTasks,
  createUser,
};