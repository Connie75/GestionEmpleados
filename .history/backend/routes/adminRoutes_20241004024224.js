const express = require('express');
const routes = expressroutes();
const admin = require('../controllers/adminController');

// Ruta para crear un nuevo admin
routes.post('/admin', adminController.createAdmin);

module.exports = routes;

