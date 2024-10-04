const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

// Ruta para obtener todos los empleados
router.get('/empleados', empleadoController.getEmpleados);

// Ruta para crear un nuevo empleado
router.post('/empleados', empleadoController.createEmpleado);

// Ruta para actualizar un empleado por ID
router.put('/empleados/:id', empleadoController.updateEmpleado);

// Ruta para eliminar un empleado por ID
router.delete('/empleados/:id', empleadoController.deleteEmpleado);

module.exports = router;
