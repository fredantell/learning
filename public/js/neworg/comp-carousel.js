var projVars = require('./global-variables.js')
var fs = require('fs');

var buildFeatureCarousel = function(path) {
  var html = '';
  var files = fs.readdirSync(path);

  //path must have trailing slash or else it will break img source
  if (path[path.length - 1] !== '/') {
    path += '/';
  }

  //path for fs and path for static files are different.
  //Must rip ./public off of path.  Probably a better way to do this
  //using an actual path variable from express
  path = path.slice(path.indexOf('img'), path.length);

  //check to make sure files is not empty
  if (files === undefined) {
    console.log('Searched for files but none present');
    return false;
  }

  //build the skeleton of the carousel
  html += '' +
    '<div id="rouxCarousel" class="carousel slide hidden-sm hidden-xs">\n' +
    '  <ol class="carousel-indicators">\n' +
    '    <li data-target="#rouxCarousel" data-slide-to="0" class="active"></li>\n';

  for (var j = 1; j < files.length; j++) {
    html += '' +
      '<li data-target="#rouxCarousel" data-slide-to="' + j + '"></li>\n';
  }

  html += '' +
    '</ol><!-- carousel-indicators -->' +

    '<section class="carousel-inner">\n' +
    '<div class="active item"><img src="' + path + files[0] + '"></div>\n';

  //build the other carousel items file by file
  for (var i = 1; i < files.length; i++) {
    html += '<div class="item"><img src="' + path + files[i] + '"></div>\n';
  }

  //close the skeleton and complete the carousel markup
  html += '' +
    '</section><!--carousel-inner-->\n' +
    '<a href="#rouxCarousel" class="left carousel-control" data-slide="prev">\n' +
    '  <i class="icon-prev icon-chevron-left"></i></a>\n' +
    '<a href="#rouxCarousel" class="right carousel-control" data-slide="next">\n' +
    '  <i class="icon-next icon-chevron-right"></i></a>\n' +
    '</div><!--rouxCarousel-->\n';

  return html;

};

module.exports = buildFeatureCarousel(projVars.carouselImagePath);