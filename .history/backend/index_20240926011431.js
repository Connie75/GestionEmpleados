const express = require('express');
const cors = require('cors');
const connectDB = require('./path/to/connectDB');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Importar y usar rutas
const empleadoRoutes = require('./routes/empleadoRoutes');
const adminRoutes = require('./routes/adminRoutes');
const configRoutes = require('./routes/configRoutes');
const localRoutes = require('./routes/localRoutes');

app.use('/api/empleados', empleadoRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/configs', configRoutes);
app.use('/api/locales', localRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
