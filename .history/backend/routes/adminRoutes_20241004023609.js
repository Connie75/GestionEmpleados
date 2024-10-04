const express = require('express');
const routes = express.routes();
const admin = require('../controllers/adminController');

// Ruta para crear un nuevo admin
routes.post('/admin', adminController.createAdmin);

module.exports = routes;

