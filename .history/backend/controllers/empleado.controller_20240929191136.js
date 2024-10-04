const Empleado = require('../models/empleado.model'); // Asegúrate de que el modelo esté correctamente importado

exports.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createEmpleado = async (req, res) => {
    const nuevoEmpleado = new Empleado(req.body);
    try {
        const empleadoGuardado = await nuevoEmpleado.save();
        res.status(201).json(empleadoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateEmpleado = async (req, res) => {
    try {
        const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(empleadoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Empleado eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
