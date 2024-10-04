const express = require('express');
const cors = require('cors');
const connectDB = require('./GestionEmpleados'); // Asegúrate de que este nombre coincide
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Importar y usar rutas
const empleadoRoutes = require('./backend/routes/empleadoRoutes');
const adminRoutes = require('./backend/routes/adminRoutes');
const configRoutes = require('./backend/routes/configRoutes');
const localRoutes = require('./backend/routes/localRoutes');

app.use('/api/empleados', empleadoRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/configs', configRoutes);
app.use('/api/locales', localRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
