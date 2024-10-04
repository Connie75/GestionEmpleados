const express = require('express');
const router = express.Router();
const localController = require('../controllers/local.controller');

// Define tus rutas aquí
router.get('/local', localController.getLocals);
router.post('/local', localController.createLocal);
router.put('/local/:id', localController.updateLocal);
router.delete('/local/:id', localController.deleteLocal);

module.exports = router;
