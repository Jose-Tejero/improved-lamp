const TaskServices = require("../services/tasks.services");
const jwt = require('jsonwebtoken');

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
    next({ message: 'No hay tareas para este usuario', status: 400, errorContent: error });
  }
};

const postTask = async (req, res, next) => {
  try {
    const { newTask, categories } = req.body;
    const result = await TaskServices.postOne(newTask, categories);
    res.status(201).json({ message: 'La tarea ha sido creada' });
  } catch (error) {
    next({
      message: 'Algo salió mal al crear la tarea',
      status: 400,
      errorContent: error,
    })
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

const putTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const isComplete = req.body;
    const result = await TaskServices.updateTask(id, isComplete);
    res.status(200).json({ message: 'Tarea actualizada' });
  } catch (error) {
    next({
      message: 'No se ha podido actualizar la tarea',
      status: 400,
      error: error,
    })
  }
};

module.exports = {
  getAllTasks,
  postTask,
  deleteTask,
  putTask,
  getTaskByUserId,
}