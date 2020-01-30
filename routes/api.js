const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.js');

router.get('/createdates', apiController.createDates);
router.get('/listdates', apiController.listDates);
router.get('/deletedates', apiController.deleteDates);

module.exports = router;