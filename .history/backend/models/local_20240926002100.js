const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocalSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
});

module.exports = mongoose.model('Local', LocalSchema);
