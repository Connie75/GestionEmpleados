const express = require('express');
const cors = require('cors');
const connectDB = require('./database.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Importar y usar rutas
const routes = require('./routes/routes');
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;