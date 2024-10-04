
const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin.controller');

// Ruta para crear un nuevo admin
router.post('/admin', adminController.createAdmin);

module.exports = router;

