const express = require('express');
const routes = express.Router();
const localController = require('../controllers/localcontroller');
const empleado = require ('../controllers/empleado.controller')

// Define tus rutas aquí
routes.get('/local', localController.getLocals);
routes.post('/local', localController.createLocal);
routes.put('/local/:id', localController.updateLocal);
routes.delete('/local/:id', localController.deleteLocal);

module.exports = router;
