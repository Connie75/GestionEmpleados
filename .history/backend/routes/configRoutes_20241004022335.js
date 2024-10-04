const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');
const authMiddleware = require('../middleware/auth.middleware');

// Ruta para obtener todas las configuraciones
router.get('/config', authMiddleware, configController.getConfigs);

// Ruta para crear una nueva configuración
router.post('/config', authMiddleware, configController.createConfig);

// Ruta para actualizar una configuración por ID
router.put('/config/:id', authMiddleware, configController.updateConfig);

// Ruta para eliminar una configuración por ID
router.delete('/config/:id', authMiddleware, configController.deleteConfig);

module.exports = router;
