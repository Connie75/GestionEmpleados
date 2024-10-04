const Admin = require('../models/admin');

const adminController = {};

// Crear admin
adminController.createAdmin = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validación básica
    if (!username || !password || !role) {
      return res.status(400).json({ message: 'Todos los campos son requeridos: username, password, role' });
    }

    
    const admin = new Admin({ username, password: hashedPassword, role });
    await admin.save();
    res.status(201).json({ message: 'Admin creado exitosamente', admin });
  } catch (err) {
    res.status(400).json({ message: 'Error al crear admin', error: err.message });
  }
};

module.exports = adminController;