const express = require('express');
const router = express.Router();
const empleadoRoutes = require('./empleadoRoutes');
const authRoutes = require('./authRoutes');

// Usar las rutas con el prefijo /api
router.use('/api', empleadoRoutes);
router.use('/api', authRoutes);

module.exports = router;

