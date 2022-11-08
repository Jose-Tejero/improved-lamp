const Address = require('./address.models');
const Tasks = require('./tasks.models');
const Users = require('./users.models');
const Categories = require('./categories.models');
const TaskCategories = require('./TasksCategories.models');

const initModels = () => {

  Users.hasOne(Address, { as: 'home', foreignKey: 'user_id' });
  Address.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  Users.hasMany(Tasks, { as: 'task', foreignKey: 'user_id' });
  Tasks.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  Tasks.hasMany(TaskCategories, { as: 'category', foreignKey: 'task_id' });
  TaskCategories.belongsTo(Tasks, { as: 'task', foreignKey: 'task_id' });

  Categories.hasMany(TaskCategories, { as: 'task', foreignKey: 'category_id' });
  TaskCategories.belongsTo(Categories, { as: 'category', foreignKey: 'category_id' });

  Users;
  Tasks;
  Address;
};

module.exports = initModels;