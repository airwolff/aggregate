var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var getUrl = require('./routes/getUrl.js');
var parser = require('./routes/parser.js');
var portDecision = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//routing modules
app.use('/getUrl', getUrl);
app.use('/parser', parser);

app.get('/', function (req, res) {
	res.sendFile(path.resolve('./public/views/index.html'));
});

app.use(express.static('public'));

app.listen(portDecision, function () {
	console.log('running on port', portDecision);
});
