
const Config = require('../models/config');

// Obtener todas las configuraciones
exports.getConfigs = async (req, res) => {
  try {
    const configs = await Config.find();
    res.json(configs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva configuración
exports.createConfig = async (req, res) => {
  const config = new Config({
    key: req.body.key,
    value: req.body.value,
  });

  try {
    const newConfig = await config.save();
    res.status(201).json(newConfig);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
