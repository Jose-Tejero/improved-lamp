const { Router } = require('express');
const { getAllTasks, postTask, deleteTask, putTask } = require('../controllers/tasks.controllers');

const router = Router();

router.get('/tasks', getAllTasks);

router.post('/tasks', postTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', putTask);

module.exports = router;