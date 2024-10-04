const mongoose = require('mongoose');

// Conectar a MongoDB
const uri = process.env.DB_STRING || 'your-fallback-uri';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
