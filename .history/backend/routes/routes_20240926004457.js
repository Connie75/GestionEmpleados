//const express = require('express');
//onst router = express.Router();

const empleadoController = require('../controllers/empleado.controller');
const adminController = require('../controllers/admin.controller');
const configController = require('../controllers/config.controller');
const localController = require('../controllers/local.controller');

// Rutas para empleados
router.get('/empleados', empleadoController.getEmpleados);
router.post('/empleados', empleadoController.createEmpleado);
router.get('/empleados/:id', empleadoController.getUnicoEmpleado);  // Agregar esta línea si no estaba
router.put('/empleados/:id', empleadoController.editarEmpleado);
router.delete('/empleados/:id', empleadoController.eliminarEmpleado);

// Rutas para admin
router.get('/admin', adminController.getAdmins);
router.post('/admin', adminController.createAdmin);

// Rutas para config
router.get('/config', configController.getConfigs);
router.post('/config', configController.createConfig);

// Rutas para local
router.get('/local', localController.getLocals);
router.post('/local', localController.createLocal);

module.exports = router;
