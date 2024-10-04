const express = require('express');
const router = express.Router();
const localController = require('../controllers/local.controller');

// Ruta para obtener todos los locales
router.get('/local', localController.getLocales);

// Ruta para crear un nuevo local
router.post('/local', localController.createLocal);

// Ruta para actualizar un local por ID
router.put('/local/:id', localController.updateLocal);

// Ruta para eliminar un local por ID
router.delete('/local/:id', localController.deleteLocal);

module.exports = router;
