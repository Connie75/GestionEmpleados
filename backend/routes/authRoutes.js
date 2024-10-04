const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Ruta para iniciar sesión
router.post('/login', authController.login);

module.exports = router;

routes.js (Archivo principal de rutas)

const express = require('express');
const router = express.Router();
const empleadoRoutes = require('./empleadoRoutes');
const authRoutes = require('./authRoutes');

// Usar las rutas con el prefijo /api
router.use('/api', empleadoRoutes);
router.use('/api', authRoutes);

module.exports = router;
