const { Router } = require('express');
const { getAllUsers, getUserById, getUserWithAddress, getUsersWithTasks, createUser } = require('../controllers/users.controllers');

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/:id/address', getUserWithAddress);

router.get('/users/:id/tasks', getUsersWithTasks);

router.post('/users', createUser);

module.exports = router;