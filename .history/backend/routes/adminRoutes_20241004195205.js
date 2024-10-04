const express = require('express');
const routes = express.Router();

routes.get('/admin', (req, res) => {
    res.send('Admin route');
});

module.exports = routes;
