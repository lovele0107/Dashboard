const express = require('express');
const axios = require('axios');
const router = express.Router();

var config = require('config');
var cseurl = "http://" + config.cse.ip + ":" + config.cse.port + "/~/" + config.cse.id + "/" + config.cse.name

const stuffCtrl = require('../controllers/stuff');

router.get('/all', stuffCtrl.getAllAE);
router.get('/server/:name', stuffCtrl.getCnts);
router.get('/server/:name/:cntname', stuffCtrl.getAllCin);
router.get('/server/:name/:cntname/la', stuffCtrl.getCin);

module.exports = router;