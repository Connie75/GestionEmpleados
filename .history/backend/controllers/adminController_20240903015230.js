const Admin = require('../models/admin');

// Obtener todos los administradores
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo administrador
exports.createAdmin = async (req, res) => {
  const admin = new Admin({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  });

  try {
    const newAdmin = await admin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
