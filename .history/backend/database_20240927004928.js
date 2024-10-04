const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Gestimpleados'; // Para un fallback local

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {

    });
    console.log('Conexión a MongoDB exitosa');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1); // Salir de la aplicación si falla la conexión
  }
};

module.exports = connectDB;
