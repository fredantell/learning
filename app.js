var express = require('express');
var pages = require('./pages.js');
var app = express();


app.use(express.logger());
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






// app.get('/test.json', function(req, res) {
//   var obj = {
//     name: "fredrik",
//     goob: true
//   };
//   res.send(JSON.stringify(obj));
// });