const express = require('express');
const router = express.Router();
const admin = require('../controllers/adminController');

// Ruta para crear un nuevo admin
router.post('/admin', adminController.createAdmin);

module.exports = router;

