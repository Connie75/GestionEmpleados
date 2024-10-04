const express = require('express');
const router = express.Router();
const configController = require('../controllers/configController');

router.post('/', configController.createConfig);
router.get('/', configController.getConfigs);
router.put('/:id', configController.updateConfig);
router.delete('/:id', configController.deleteConfig);

module.exports = router;
