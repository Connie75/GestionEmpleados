const mongoose = require('mongoose');
const { Schema } = mongoose;

const configSchema = new Schema({
  key: { type: String, required: true },
  value: { type: String, required: true }
});

module.exports = mongoose.model('Config', configSchema);