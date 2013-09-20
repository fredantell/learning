var express = require('express');
var pages = require('./pages.js');
var app = express();

app.use(express.logger());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.send('Hello Worlds');
});

app.get('/fredrik', function(request, response) {
	response.send(pages.fredrik());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

