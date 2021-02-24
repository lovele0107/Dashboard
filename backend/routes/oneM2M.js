const express = require('express');
const axios = require('axios');
const router = express.Router();

var config = require('config');

const oneM2MCtrl = require('../controllers/oneM2M');

router.get('/all', oneM2MCtrl.getAllAE);
router.get('/server/:name', oneM2MCtrl.getCnts);
router.get('/server/:name/:cntname', oneM2MCtrl.getAllCin);
router.get('/server/:name/:cntname/la', oneM2MCtrl.getCin);

module.exports = router;