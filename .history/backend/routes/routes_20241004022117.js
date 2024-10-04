const express = require('express');
const router = express.Router();
const empleado = require('./empleadoRoutes');
const admin = require('./adminRoutes');
const config = require('./configRoutes');
const localRoutes = require('./localRoutes');

// Usar las rutas con el prefijo /api
router.use('/api', empleados);
router.use('/api', admin);
router.use('/api', config);
router.use('/api', local);

module.exports = router;
