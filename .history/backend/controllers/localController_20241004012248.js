const Local = require('../models/local');

const localController = {};

// Obtener todos los locales
localController.getLocales = async (req, res) => {
  try {
    const locales = await Local.find();
    if (!locales.length) {
      return res.status(404).json({ message: 'No se encontraron locales' });
    }
    res.json(locales);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener locales', error: error.message });
  }
};

// Crear local
localController.createLocal = async (req, res) => {
  try {
    const { nombre, direccion, telefono } = req.body;

    // Validación básica
    if (!nombre || !direccion || !telefono) {
      return res.status(400).json({ message: 'Todos los campos son requeridos: nombre, direccion, telefono' });
    }

    const local = new Local({ nombre, direccion, telefono });
    await local.save();
    res.status(201).json({ message: 'Local creado exitosamente', local });
  } catch (err) {
    res.status(400).json({ message: 'Error al crear local', error: err.message });
  }
};

// Actualizar local
localController.updateLocal = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el local existe
    const localExistente = await Local.findById(id);
    if (!localExistente) {
      return res.status(404).json({ message: 'Local no encontrado' });
    }

    const localActualizado = await Local.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.json({ message: 'Local actualizado correctamente', local: localActualizado });
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar local', error: err.message });
  }
};

// Eliminar local
localController.deleteLocal = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el local existe antes de intentar eliminar
    const localExistente = await Local.findById(id);
    if (!localExistente) {
      return res.status(404).json({ message: 'Local no encontrado' });
    }

    await Local.findByIdAndDelete(id);
    res.json({ message: 'Local eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar local', error: err.message });
  }
};

module.exports = localController;
