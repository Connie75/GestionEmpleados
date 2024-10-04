const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Empleado = require('../models/empleado');

const authController = {};

// Iniciar sesión
authController.login = async (req, res) => {
  try {
    const { nombre, password } = req.body;

    // Validar si el empleado existe
    const empleado = await Empleado.findOne({ nombre });
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    // Validar la contraseña
    const isMatch = await bcrypt.compare(password, empleado.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Crear y enviar el token
    const token = jwt.sign({ id: empleado._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (err) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: err.message });
  }
};

module.exports = authController;
