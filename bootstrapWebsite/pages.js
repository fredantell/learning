'use strict';

var fs = require('fs');
var siteFns = require('./public/js/serverside/site-functions.js');

//--------------------------------------
//--------------------------------------
//----Builders for page sections--------
//--------------------------------------
//--------------------------------------
var buildHTMLHead = function(pageTitle) {
  pageTitle = pageTitle || '';

  var html = '' +
  '<html>' +
  '<head>' +
  '<meta charset="UTF-8" />' +
  '<title>Roux - ' + pageTitle + '</title>' +
  "<link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>" +
  "<link href='./css/bootstrap.css' rel='stylesheet'>" +
  '<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">' +
  '<link href="./css/mystyles.css" rel="stylesheet">' +
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

//      '<div class="content row">' +
//      '  <div class="col-lg-12">' +
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
      '            <a class="dropdown-toggle" data-toggle="dropdown" href="artists">All artists<span class="caret"></span></a>' +
      '            <ul class="dropdown-menu">' +
      '              <li><a href="artists">All artists</a></li>' +
      '              <li class="divider"></li>' +
                     siteFns.listOfIndividualArtistLIs(siteFns.getArtistsObj()) +
      '            </ul><!-- dropdown menu -->' +
      '          </li><!-- dropdown class -->' +
      '          <li><a href="register">Register</a></li>' +
      '        </ul><!-- nav -->' +
      '      </section><!-- navbar -->' +

      '    </header><!-- clearfix header -->';
//      '  </div><!-- column -->' +
//      '</div><!-- content -->';

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
  '<script src="js/bootstrap.js"></script>' +
  '<script src="/js/myscript.js"></script>' +
  '</section><!-- end section.container after <body> tag -->' +
  '</body>' +
  '</html>';

  return html;
};

var buildBodyIndex = function() {
  var buildCarousel = require('./public/js/serverside/comp-carousel.js');
  var aboutTheArtists = require('./public/js/serverside/comp-abouttheartists.js');
  var mainContent = require('./public/js/serverside/comp-main.js');
  var scheduleContent = require('./public/js/serverside/comp-schedule.js');
  var photosOfLastYear = require('./public/js/serverside/comp-photoslastyear.js');
  var register = require('./public/js/serverside/comp-register.js');
  var aboutTheVenue = require('./public/js/serverside/comp-aboutthevenue.js');

  var html = '' +
  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-12">\n' +
         buildCarousel +
  '    </section><!-- main -->\n' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +

  '<section class="container">\n' +
  '  <div class="content row">\n' +
  '    <section class="main col col-lg-8 col-md-8">\n' +
        mainContent.article() +
        aboutTheArtists.article() +
        aboutTheVenue.article() +
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        register.aside() +
        photosOfLastYear.aside() +
        scheduleContent.aside() +
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodyVenues = function() {
  var aboutTheArtists = require('./public/js/serverside/comp-abouttheartists.js');
  var scheduleContent = require('./public/js/serverside/comp-schedule.js');
  var photosOfLastYear = require('./public/js/serverside/comp-photoslastyear.js');
  var register = require('./public/js/serverside/comp-register.js');
  var allVenues = require('./public/js/serverside/comp-allvenues.js');

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
        allVenues.article() +
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        register.aside() +
        photosOfLastYear.aside() +
        aboutTheArtists.aside() +
        scheduleContent.aside() +
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodySchedule = function() {
  var aboutTheArtists = require('./public/js/serverside/comp-abouttheartists.js');
  var scheduleContent = require('./public/js/serverside/comp-schedule.js');
  var photosOfLastYear = require('./public/js/serverside/comp-photoslastyear.js');
  var register = require('./public/js/serverside/comp-register.js');

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
        scheduleContent.article() +
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        register.aside() +
        photosOfLastYear.aside() +
        aboutTheArtists.aside() +
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodyArtists = function() {
  var scheduleContent = require('./public/js/serverside/comp-schedule.js');
  var photosOfLastYear = require('./public/js/serverside/comp-photoslastyear.js');
  var register = require('./public/js/serverside/comp-register.js');
  var allArtists = require('./public/js/serverside/comp-allartists.js');

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
        allArtists.article() +
  '    </section><!-- main -->\n' +
  '    <section class="sidebar col col-lg-4 col-md-4">' +
        register.aside() +
        photosOfLastYear.aside() +
        scheduleContent.aside() +
  '    </section><!--sidebar-->' +
  '  </div><!-- content -->\n' +
  '</section><!-- container -->\n' +
  '<h2></h2>'; //for margin spacing

  return html;

};

var buildBodyRegister = function() {
  var scheduleContent = require('./public/js/serverside/comp-schedule.js');
  //var photosOfLastYear = require('./public/js/serverside/comp-photoslastyear.js');
  var register = require('./public/js/serverside/comp-register.js');

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
    register.article() +
    '    </section><!-- main -->\n' +
    '    <section class="sidebar col col-lg-4 col-md-4">' +
    register.aside() +
    scheduleContent.aside() +
    '    </section><!--sidebar-->' +
    '  </div><!-- content -->\n' +
    '</section><!-- container -->\n' +
    '<h2></h2>'; //for margin spacing

  return html;

};

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
