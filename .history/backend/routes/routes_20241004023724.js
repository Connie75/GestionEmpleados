const express = require ('express');
const router = express.Router();
const empleado = require ('./empleadoRoutes');
const admin = require ('./adminRoutes');
const config = require ('./configRoutes');
const local = require ('./localRoutes');

// Usar las rutas con el prefijo /api
routes.use('/api', empleadoRoutes);
routes.use('/api', adminRoutes);
router.use('/api', configRoutes);
router.use('/api', localRoutes);

module.exports = router;
