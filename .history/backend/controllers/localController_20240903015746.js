const Empleado = require('../models/empleado');

// Obtener todos los empleados
exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo empleado
exports.createEmpleado = async (req, res) => {
  const empleado = new Empleado(req.body);

  try {
    await empleado.save();
    res.status(201).json({ status: 'Empleado guardado' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un empleado único
exports.getUnicoEmpleado = async (req, res) => {
  try {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
  } catch (error) {
    res.status(404).json({ message: 'Empleado no encontrado' });
  }
};

// Editar un empleado

const Local = require('../models/local');

// Obtener todos los locales
exports.getLocals = async (req, res) => {
  try {
    const locals = await Local.find();
    res.json(locals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo local
exports.createLocal = async (req, res) => {
  const local = new Local({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
  });

  try {
    const newLocal = await local.save();
    res.status(201).json(newLocal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
