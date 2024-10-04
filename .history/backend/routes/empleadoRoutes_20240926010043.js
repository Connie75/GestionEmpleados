const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

// Ruta para obtener todos los empleados
router.get('/empleados', empleadoController.getEmpleados);

module.exports = router;
