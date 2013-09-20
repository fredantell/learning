var buildData = function() {
  var data = require('./data.json');
  var html = '' +
  '<div>' +
  JSON.stringify(data) +
  '</div>';
  return html;
};

var buildHead = function() {
  var html = '' +
  '<html>' +
  '<head>' +
  '<body>';

  return html;
};

var buildFooter = function() {
  var html = '' +
  '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>' +
  '</body>' +
  '</html>';

  return html;
};


exports.fredrik = function() {
  var html = '' +
  buildHead() +
  buildData() +
  buildFooter();

  return html;
};
