'use strict';

//--------------------------------------
//--------------------------------------
//----Aux functions for use in----------
//-----builder functions below----------
//--------------------------------------
//--------------------------------------
var fs = require('fs');
var articles = require('./public/js/articles.js');
var asides = require('./public/js/asides.js');
var helper = require('./public/js/helper.js');


var listOfIndividualArtistLIs = function(arrayOfArtistObjs) {
  var html = '';
  arrayOfArtistObjs.forEach(function(artistObj) {
    html += '\n' +
        '<li><a href="artists/' + artistObj.shortname +
        '">' + artistObj.name + '</a></li>';
  });

  return html;
};

//--------------------------------------
//--------------------------------------
//----Builders for page sections--------
//--------------------------------------
//--------------------------------------

var buildCarousel = function(path) {

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

var buildHTMLHead = function(pageTitle) {
  pageTitle = pageTitle || '';

  var html = '' +
  '<html>' +
  '<head>' +
  '<meta charset="UTF-8" />' +
  '<title>Roux - ' + pageTitle + '</title>' +
  "<link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>" +
  "<link href='./lib/bootstrap/css/bootstrap.css' rel='stylesheet'>" +
  '<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">' +
  '<link href="./css/styles.css" rel="stylesheet">' +
  '</head>' +
  '<body id="' + pageTitle + '">';


  return html;
};
var buildHeader = function() {
  var html = '' +
  '<section class="container">' +
    '<div class="container">' +

      '<section id="modal" class="modal fade">' +
      '  <div class="modal-body">' +
      '    <img id="modalimage" src="" alt="" style="max-width:100%">' +
      '  </div><!--modal-body-->' +
      '</section>' +

      '<div class="content row">' +
      '  <div class="col-lg-12">' +
      '    <header class="clearfix">' +

      '      <section id="branding">' +
      '        <a href="home"><img src="img/misc/ralogo_monogram.png" alt="Logo for Roux Conference"></a>' +
      '      </section><!-- branding -->' +

      '      <section class="navbar navbar-default">' +
      '        <ul class="nav navbar-nav">' +
      '          <li><a href="home">Home</a></li>' +
      '          <li><a href="venuetravel">Venue/Travel</a></li>' +
      '          <li><a href="schedule">Schedule</a></li>' +
      '          <li class="dropdown">' +
      '            <a class="dropdown-toggle" data-toggle="dropdown" href="#">All artists<span class="caret"></span></a>' +
      '            <ul class="dropdown-menu">' +
      '              <li><a href="artists">All artists</a></li>' +
      '              <li class="divider"></li>' +
                     listOfIndividualArtistLIs(helper.getArtistsObj()) +
      '            </ul><!-- dropdown menu -->' +
      '          </li><!-- dropdown class -->' +
      '          <li><a href="register">Register</a></li>' +
      '        </ul><!-- nav -->' +
      '      </section><!-- navbar -->' +

      '    </header><!-- clearfix header -->' +
      '  </div><!-- column -->' +
      '</div><!-- content -->';

  return html;
};

var buildFooter = function() {
  var html = '' +
  '</div><!-- end div.content row -->' + //close div from HTMLhead'
  // '<section class="container">' +
  '  <footer class="content row">' +
  '    <nav class="col-lg-12">' +
  '      <ul class="breadcrumb">' +
  '        <li><a href="about">About the Roux Academy</a></li>' +
  '        <li><a href="privacypolicy">Privacy Policy</a></li>' +
  '        <li><a href="http://rouxacademy.com">Roux Academy Website</a></li>' +
  '      </ul>' +
  '    </nav>' +
  '  </footer>' +
  // '</section><!-- footer container -->' +
  '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>' +
  '<script src="lib/bootstrap/js/bootstrap.js"></script>' +
  '<script src="/js/myscript.js"></script>' +
  '</section><!-- end section.container after <body> tag -->' +
  '</body>' +
  '</html>';

  return html;
};

var buildBodyIndex = function() {
  var html = '' +
  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-12">\n' +
         buildCarousel('./public/img/carousel') +
  '    </section><!-- main -->\n' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +

  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-8 col-md-8">\n' +
        articles.main() +
        articles.aboutTheArtists() +
        articles.aboutTheVenue() +
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        asides.register() +
        asides.photosLastYear() +
        asides.schedule() +
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodyVenues = function() {
  var html = '' +
  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-12">\n' +
  '    </section><!-- main -->\n' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +

  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-8 col-md-8">\n' +
        articles.allVenues() +        
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        asides.register() +
        asides.photosLastYear() +
        asides.aboutTheArtists() +
        asides.schedule() +
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodySchedule = function() {
  var html = '' +
  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-12">\n' +
  '    </section><!-- main -->\n' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +

  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-8 col-md-8">\n' +
        articles.schedule() +
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        asides.register() +
        asides.photosLastYear() +
        asides.aboutTheArtists() +
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodyArtists = function() {
  var html = '' +
  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-12">\n' +
  '    </section><!-- main -->\n' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +

  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-8 col-md-8">\n' +
        articles.allArtists() +
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        asides.register() +
        asides.photosLastYear() +
        asides.schedule() +        
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodyRegister = function() {
  var html = '' +
    '<section class="container">\n' +
    '  <div class="content row">\n' +
    '    <section class="main col col-lg-12">\n' +
    '    </section><!-- main -->\n' +
    '  </div><!-- content -->\n' +
    '</section><!-- container -->\n' +

    '<section class="container">\n' +
    '  <div class="content row">\n' +
    '    <section class="main col col-lg-8 col-md-8">\n' +
    articles.register() +
    '    </section><!-- main -->\n' +
    '    <section class="sidebar col col-lg-4 col-md-4">' +
    asides.photosLastYear() +
    asides.schedule() +
    '    </section><!--sidebar-->' +
    '  </div><!-- content -->\n' +
    '</section><!-- container -->\n' +
    '<h2></h2>'; //for margin spacing

  return html;

};


//--------------------------------------
//--------------------------------------
//---Potential Data for JSON------------
//-------(Mock API)---------------------
//--------------------------------------
//--------------------------------------



//--------------------------------------
//--------------------------------------
//----Builders for whole pages----------
//--------------------------------------
//--------------------------------------

var buildPageIndex = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageAbout = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageArtists = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyArtists() +
  buildFooter() +
   "<script>$('body').attr('data-spy', 'scroll').attr('data-target', '#artistNavList')</script>";

  return html;
};

var buildPagePrivacyPolicy = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageRegister = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyRegister() +
  buildFooter();

  return html;
};

var buildPageSchedule = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodySchedule() +
  buildFooter();

  return html;
};

var buildPageVenueTravel = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyVenues() +
  buildFooter();

  return html;
};

var buildPage404 = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  '<div style="font-size:40px; text-align:center; margin-top:50px;">' +
  'Sorry this page does not exist</div>' +
  buildFooter();

  return html;
};
var buildPageFredrik = function(pageURL) {
  var html = '' +
  buildHTMLHead('Fredrik\'s own page') +
  '<div style="font-size:40px; text-align:center; margin-top:50px;">' +
  'Wowaweewa!  You got it working!</div>' +
  buildFooter();

  return html;
};
var buildPageDenise = function(pageURL) {
  var html = '' +
  buildHTMLHead('Denise\'s own page') +
  '<div style="font-size:40px; text-align:center; margin-top:50px;">' +
  'Of course my goober gets her own page!</div>' +
  buildFooter();

  return html;
};

//--------------------------------------
//--------------------------------------
//----Exports Section-------------------
//--------------------------------------
//--------------------------------------

var pageFns = {
    home: buildPageIndex,
    about: buildPageAbout,
    artists: buildPageArtists,
    privacypolicy: buildPagePrivacyPolicy,
    register: buildPageRegister,
    schedule: buildPageSchedule,
    venuetravel: buildPageVenueTravel,
    fredrik: buildPageFredrik,
    denise: buildPageDenise
  };

exports.createPage = function(key) {

  if (pageFns[key] === undefined) {
    return buildPage404();
  }

  return pageFns[key](key);
};



var loremText = 'Wowaweewa!  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
