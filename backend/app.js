var express = require('express');
var request = require('request');
var hashmap = require('hashmap');
var config = require('config');
var bodyParser = require('body-parser');
var cors = require('cors');

const stuffRoutes = require('./routes/stuff');

const path = require('path');
var morgan = require('morgan'); // Charge le middleware de logging

const readline = require('readline');

const axios = require('axios').default;

const app = express();

var map = new hashmap();
//var cseurl = "http://" + config.cse.ip + ":" + config.cse.port + "/~/" + config.cse.id + "/" + config.cse.name



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(morgan('combined')) // Active le middleware de logging

//app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use('/', stuffRoutes);

module.exports = app;