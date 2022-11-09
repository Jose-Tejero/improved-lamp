const { Router } = require('express');
const { getAllTasks, postTask, deleteTask, putTask, getTaskByUserId } = require('../controllers/tasks.controllers');

const router = Router();

// router.get('/tasks', getAllTasks); Se comenta para que solo tenga acceso el admin a todas las tareas

router.get('/tasks/:userId', getTaskByUserId);

router.post('/tasks', postTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', putTask);

module.exports = router;