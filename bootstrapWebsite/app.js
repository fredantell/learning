var express = require('express');
var app = express();

var pages = require('./pages.js');

//app.use(express.logger());
app.use(express.static(__dirname + '/public'));
app.use(app.router);


app.get('/', function(req, res) {
  res.redirect('/home');
});

app.get('/:pageName', function(req, res) {
  var pageName = req.params.pageName;
  res.send(pages.createPage(pageName));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});

