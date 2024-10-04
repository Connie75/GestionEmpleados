const Config = require('../models/config');

const configController = {};

// Obtener todas las configuraciones
configController.getConfigs = async (req, res) => {
  try {
    const configs = await Config.find();
    if (!configs.length) {
      return res.status(404).json({ message: 'No se encontraron configuraciones' });
    }
    res.json(configs);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener configuraciones', error: error.message });
  }
};

// Crear configuración
configController.createConfig = async (req, res) => {
  try {
    const { key, value } = req.body;

    // Validación básica
    if (!key || !value) {
      return res.status(400).json({ message: 'Todos los campos son requeridos: key, value' });
    }

    const config = new Config({ key, value });
    await config.save();
    res.status(201).json({ message: 'Configuración creada exitosamente', config });
  } catch (err) {
    res.status(400).json({ message: 'Error al crear configuración', error: err.message });
  }
};

// Actualizar configuración
configController.updateConfig = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si la configuración existe
    const configExistente = await Config.findById(id);
    if (!configExistente) {
      return res.status(404).json({ message: 'Configuración no encontrada' });
    }

    const configActualizada = await Config.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.json({ message: 'Configuración actualizada correctamente', config: configActualizada });
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar configuración