const express = require('express');
const router = express.Router();
const controller = require('../controllers/supplier.controller');

router.get('/', controller.index);

module.exports = router;