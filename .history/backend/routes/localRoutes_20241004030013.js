const express = require('express');
const routes = express.Router();
const localController = require('../controllers/local.controller');

// Define tus rutas aquí
routes.get('/local', localController.getLocals);
routes.post('/local', localController.createLocal);
router.put('/local/:id', localController.updateLocal);
router.delete('/local/:id', localController.deleteLocal);

module.exports = router;
