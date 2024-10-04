
const Empleado = require('../models/empleado');
const bcrypt = require('bcryptjs');

const empleadoController = {};

// Obtener todos los empleados
empleadoController.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    if (!empleados.length) {
      return res.status(404).json({ message: 'No se encontraron empleados' });
    }
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener empleados', error: error.message });
  }
};

// Crear empleado
empleadoController.createEmpleado = async (req, res) => {
  try {
    const { nombre, puesto, departamento, salario, password } = req.body;

    // Validación básica
    if (!nombre || !puesto || !departamento || !salario || !password) {
      return res.status(400).json({ message: 'Todos los campos son requeridos: nombre, puesto, departamento, salario, password' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const empleado = new Empleado({ nombre, puesto, departamento, salario, password: hashedPassword });
    await empleado.save();
    res.status(201).json({ message: 'Empleado creado exitosamente', empleado });
  } catch (err) {
    res.status(400).json({ message: 'Error al crear empleado', error: err.message });
  }
};

// Actualizar empleado
empleadoController.updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el empleado existe
    const empleadoExistente = await Empleado.findById(id);
    if (!empleadoExistente) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    const empleadoActualizado = await Empleado.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.json({ message: 'Empleado actualizado correctamente', empleado: empleadoActualizado });
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar empleado', error: err.message });
  }
};

// Eliminar empleado
empleadoController.deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar si el empleado existe antes de intentar eliminar
    const empleadoExistente = await Empleado.findById(id);
    if (!empleadoExistente) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    await Empleado.findByIdAndDelete(id);
    res.json({ message: 'Empleado eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar empleado', error: err.message });
  }
};

module.exports = empleadoController;