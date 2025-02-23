const mongoose = require('mongoose');

const ConfigSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('Config', ConfigSchema);
