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
const adminRoutes = require('./routes/adminRoutes');
const configRoutes = require('./routes/configRoutes');
const localRoutes = require('./routes/localRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');

app.use('/api/admin', adminRoutes);
app.use('/api/config', configRoutes);
app.use('/api/local', localRoutes);
app.use('/api/empleado', empleadoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
