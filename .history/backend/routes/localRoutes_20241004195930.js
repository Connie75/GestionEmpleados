
const express = require('express');
const router = express.Router();
const localController = require('../controllers/localController');

router.post('/', localController.createLocal);
router.get('/', localController.getLocales);
router.put('/:id', localController.updateLocal);
router.delete('/:id', localController.deleteLocal);

module.exports = router;
