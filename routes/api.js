const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.js');

router.get('/createdates', apiController.createDates);

module.exports = router;