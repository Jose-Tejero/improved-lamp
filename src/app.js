const express = require('express');
const initModels = require('./models/initModels');
const db = require('./utils/database');
const userRoutes = require('./routes/users.routes');
const taskRoutes = require('./routes/tasks.routes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8000;

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get('/', (req, res) => {
  res.status(200).json('Todo bien');
});

app.use(express.json());
app.use('/api/v1', userRoutes, taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});