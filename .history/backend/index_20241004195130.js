require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Importar rutas
const empleadoRoutes = require('./routes/empleadoRoutes');
app.use('/api/empleados', empleadoRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
