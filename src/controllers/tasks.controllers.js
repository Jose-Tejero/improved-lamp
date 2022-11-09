const TaskServices = require("../services/tasks.services");

const getAllTasks = async (req, res) => {
  try {
    const result = await TaskServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getTaskByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await TaskServices.getById(userId);
    res.status(200).json(result);
  } catch (error) {
    next({ message: 'no existe tarea para este id', status: 400, errorContent: error });
  }
};

const postTask = async (req, res) => {
  try {
    const newTask = req.body;
    const result = await TaskServices.postOne(newTask);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskServices.deleteOne(id);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

const putTask = async (req, res) => {
  try {
    const { id } = req.params;
    const isComplete = req.body;
    const result = await TaskServices.updateTask(id, isComplete);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  postTask,
  deleteTask,
  putTask,
  getTaskByUserId,
}