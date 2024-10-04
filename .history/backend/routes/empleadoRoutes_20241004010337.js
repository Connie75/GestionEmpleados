const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Ruta para obtener todos los empleados
router.get('/empleado', authMiddleware, empleadoController.getEmpleados);

// Ruta para crear un nuevo empleado
router.post('/empleado', authMiddleware, empleadoController.createEmpleado);

// Ruta para actualizar un empleado por ID
router.put('/empleado/:id', authMiddleware, empleadoController.updateEmpleado);

// Ruta para eliminar un empleado por ID
router.delete('/empleado/:id', authMiddleware, empleadoController.deleteEmpleado);

module.exports = router;