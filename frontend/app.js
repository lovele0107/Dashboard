var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors')
var app = express();

app.use(bodyParser.json());
app.use(cors())
var port=4100;

app.listen(port, function () {
	console.log('Dashboard listening on port '+port)
})

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
})