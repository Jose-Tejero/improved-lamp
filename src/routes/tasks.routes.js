const { Router } = require('express');
const { getAllTasks, postTask, deleteTask, putTask, getTaskByUserId } = require('../controllers/tasks.controllers');
const authVerification = require('../middlewares/auth.middleware');

const router = Router();

// router.get('/tasks', getAllTasks); Se comenta para que solo tenga acceso el admin a todas las tareas

router.get('/tasks/:userId', authVerification, getTaskByUserId);

router.post('/tasks', authVerification, postTask);

router.delete('/tasks/:id', authVerification, deleteTask);

router.put('/tasks/:id', authVerification, putTask);

module.exports = router;