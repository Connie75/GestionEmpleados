const Config = require('../models/config');

// Crear Configuración
exports.createConfig = async (req, res) => {
  try {
    const config = new Config(req.body);
    await config.save();
    res.status(201).json(config);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todas las configuraciones
exports.getConfigs = async (req, res) => {
  try {
    const configs = await Config.find();
    res.json(configs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar Configuración
exports.updateConfig = async (req, res) => {
  try {
    const config = await Config.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(config);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar Configuración
exports.deleteConfig = async (req, res) => {
  try {
    await Config.findByIdAndDelete(req.params.id);
    res.json({ message: 'Configuración eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
