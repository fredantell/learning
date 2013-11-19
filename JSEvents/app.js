var express = require('express');
var app = express();

var pages = require('./pages.js');

app.use(express.logger());
app.use(express.static(__dirname + '/public'));
app.use(app.router);

app.get('/', function(req, res) {
  res.redirect('/arteliminator');
});
app.get('/:pageName', function(req, res) {
  console.log(req.params.pageName);
  res.send(pages.createPage(req.params.pageName));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
