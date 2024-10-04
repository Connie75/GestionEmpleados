const express = require('express');
const router = express.Router();
const empleadoRoutes = require('./empleadoRoutes');
const adminRoutes = require('./adminRoutes');
const configRoutes = require('./configRoutes');
const localRoutes = require('./localRoutes');
const authRoutes = require('./authRoutes');

// Usar las rutas con el prefijo /api
router.use('/api', empleadoRoutes);
router.use('/api', adminRoutes);
router.use('/api', configRoutes);
router.use('/api', localRoutes);
router.use('/api', authRoutes);

module.exports = router;
