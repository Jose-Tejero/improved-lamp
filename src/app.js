const express = require('express');
const initModels = require('./models/initModels');
const db = require('./utils/database');
const userRoutes = require('./routes/users.routes');
const tasksRoutes = require('./routes/tasks.routes');
const authRoutes = require('./routes/auth.routes');
const logs = require('./middlewares/requestLogs');
const handleError = require('./middlewares/error');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors());

//app.use(logs);

const PORT = process.env.PORT || 8000;

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();


app.use((req, res, next) => {
  console.log('Antes de atender una petición');
  next();
});

app.get('/',
  (req, res) => {
    res.status(200).json('Todo bien');
  },
);

app.use("/api/v1", userRoutes);
app.use("/api/v1", tasksRoutes);
app.use("/api/v1", authRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});