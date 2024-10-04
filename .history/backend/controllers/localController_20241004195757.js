const Local = require('../models/local');

// Crear Local
exports.createLocal = async (req, res) => {
  try {
    const local = new Local(req.body);
    await local.save();
    res.status(201).json(local);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los Locales
exports.getLocales = async (req, res) => {
  try {
    const locales = await Local.find();
    res.json(locales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar Local
exports.updateLocal = async (req, res) => {
  try {
    const local = await Local.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(local);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar Local
exports.deleteLocal = async (req, res) => {
  try {
    await Local.findByIdAndDelete(req.params.id);
    res.json({ message: 'Local eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};