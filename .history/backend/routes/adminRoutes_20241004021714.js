
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');

// Ruta para crear un nuevo admin
router.post('/admin', adminController.createAdmin);

module.exports = router;

