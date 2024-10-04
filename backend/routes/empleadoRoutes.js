const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

router.post('/', empleadoController.createEmpleado);
router.get('/', empleadoController.getEmpleados);
router.put('/:id', empleadoController.updateEmpleado);
router.delete('/:id', empleadoController.deleteEmpleado);

module.exports = router;
