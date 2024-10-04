const express = require('express');
const routes = express.Router();
const admin = require('../controllers/adminController');

// Ruta para crear un nuevo admin
routes.post('/admin', adminController.createAdmin);

module.exports = router;

