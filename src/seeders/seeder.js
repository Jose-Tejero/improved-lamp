const db = require('../utils/database');
const Users = require('../models/users.models');
const Address = require('../models/address.models');
const Tasks = require('../models/tasks.models');
const Categories = require('../models/categories.models');
const TasksCategories = require('../models/TasksCategories.models');

const users = [
  { username: 'José Tejero', email: 'jose@email.com', password: '1234', },
  { username: 'Jesús Zapata', email: 'jesus@email.com', password: '1234', },
  { username: 'Roberto Pérez', email: 'roberto@email.com', password: '1234', },
];

const addresses = [
  { street: 'Capistrano', number: 30, userId: 1, },
  { street: 'Capistrano', number: 32, userId: 2, },
  { street: 'Capistrano', number: 34, userId: 3, },
];

const tasks = [
  { title: 'Cocinar', description: 'Hacer huevitos', userId: 1 },
  { title: 'Dormir', description: 'Pero dormir temprano', userId: 2 },
  { title: 'Estudiar', description: 'NodeJS', userId: 3 },
];

const categories = [
  { name: "personal" },
  { name: "escuela" },
  { name: "salud" },
  { name: "trabajo" },
  { name: "hogar" },
  { name: "deporte" },
  { name: "ocio" },
  { name: "financiero" },
];

const tc = [
  { taskId: 1, categoryId: 1 },
  { taskId: 1, categoryId: 2 },
  { taskId: 1, categoryId: 4 },
  { taskId: 2, categoryId: 1 },
  { taskId: 2, categoryId: 3 },
  { taskId: 2, categoryId: 6 },
  { taskId: 2, categoryId: 7 },
  { taskId: 3, categoryId: 1 },
  { taskId: 3, categoryId: 3 },
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));
  setTimeout(() => {
    addresses.forEach((address) => Address.create(address));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    tasks.forEach((task) => Tasks.create(task));
  }, 300);
  setTimeout(() => {
    tc.forEach((t) => TasksCategories.create(t));
  }, 400);
});