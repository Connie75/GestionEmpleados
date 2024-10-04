const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminController = {};

// Crear admin
adminController.createAdmin = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validación básica
    if (!username || !password || !role) {
      return res.status(400).json({ message: 'Todos los campos son requeridos: username, password, role' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({ username, password: hashedPassword, role });
    await admin.save();
    res.status(201).json({ message: 'Admin creado exitosamente', admin });
  } catch (err) {
    res.status(400).json({ message: 'Error al crear admin', error: err.message });
  }
};

// Iniciar sesión
adminController.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validar si el admin existe
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }

    // Validar la contraseña
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Crear y enviar el token
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (err) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: err.message });
  }
};

module.exports = adminController;
