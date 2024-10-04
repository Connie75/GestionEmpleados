const express = require('express');
const router = express.Router();

const empleadoController = require('../controllers/empleado.controller');

router.get('/', empleadoController.getEmpleados);
router.post('/', empleadoController.createEmpleado);
router.get('/:id', empleadoController.getUnicoEmpleado);
router.put('/:id', empleadoController.editarEmpleado);
router.delete('/:id', empleadoController.eliminarEmpleado);

module.exports = router;
