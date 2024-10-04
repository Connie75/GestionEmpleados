const express = require ('express');
const router = express.Router();
const empleado = require ('./empleadoRoutes');
const admin = require ('./adminRoutes');
const config = require ('./configRoutes');
const local = require ('./localRoutes');

// Usar las rutas con el prefijo /api
router.use('/api', empleadoRoutes);
router.use('/api', adminRoutes);
router.use('/api', configR);
router.use('/api', local);

module.exports = router;
