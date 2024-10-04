const express = require('express');
const router = express.Router();
const empleadoRoutes = require('./empleadoRoutes');
const adminRoutes = require('./adminRoutes');
const configRoutes = require('./configRoutes');
const localRoutes = require('./localRoutes');

// Usar las rutas con el prefijo /api
router.use('/api', empleados);
router.use('/api', adminRoutes);
router.use('/api', configRoutes);
router.use('/api', localRoutes);

module.exports = router;
