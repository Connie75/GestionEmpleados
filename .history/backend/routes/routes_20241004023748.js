const express = require ('express');
const routes = express.Router();
const empleado = require ('./empleadoRoutes');
const admin = require ('./adminRoutes');
const config = require ('./configRoutes');
const local = require ('./localRoutes');

// Usar las rutas con el prefijo /api
routes.use('/api', empleadoRoutes);
routes.use('/api', adminRoutes);
routes.use('/api', configRoutes);
routes.use('/api', localRoutes);

module.exports = routes;
