const mongoose = require('mongoose');

const localSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true }
});

module.exports = mongoose.model('Local', localSchema);
