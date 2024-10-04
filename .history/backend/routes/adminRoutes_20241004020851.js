
const express = require('express');
const routes = express.Router();
const adminController = require('../controllers/admin.controller');

// Ruta para crear un nuevo admin
router.post('/admin', adminController.createAdmin);

module.exports = router;

