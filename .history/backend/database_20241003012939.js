const mongoose = require('mongoose');
require('dotenv').config(); // Asegúrate de cargar las variables de entorno

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/empleados'; // Para un fallback local

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1); // Salir de la aplicación si falla la conexión
  }
};

module.exports = connectDB;
