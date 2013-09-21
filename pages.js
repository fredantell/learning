//--------------------------------------
//--------------------------------------
//----Aux functions for use in----------
//-----builder functions below----------
//--------------------------------------
//--------------------------------------

var getArtistsObj = function() {
  // realistically this would be replaced with a http
  // request instead of reading the file directly
  // since in a production environment the server would
  // be generating the JSON and it wouldn't be a static file
  // sitting there waiting to be included with require()
  var artists = require('./public/mock_api/artists.json');
  artists = artists.artists;
  return artists;
};

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

var buildHTMLHead = function(pageTitle) {
  pageTitle = pageTitle || '';

  var html = '' +
  '<html>' +
  '<head>' +
  '<meta charset="UTF-8" />' +
  '<title>Roux - ' + pageTitle + '</title>' +
  "<link href='http://fonts.googleapis.com/css?family=Bree+Serif|Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css'>" +
  "<link href='./lib/bootstrap/css/bootstrap.css' rel='stylesheet'>" +
  '</head>' +
  '<body id="' + pageTitle + '">';

  return html;
};
var buildHeader = function() {
  var html = '' +
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
                 listOfIndividualArtistLIs(getArtistsObj()) +
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
  '</body>' +
  '</html>';

  return html;
};

var buildBodyIndex = function() {
  var html = '' +
  '<section class="container">' +
  '  <div class="content row">' +
  '    <section class="main col col-lg-8 col-md-6">' +
  '      <h2>Main Content</h2>' +
  '      <p>' + loremText +
  '      </p>' +
  '    </section><!-- main -->' +
  '    <section class="sidebar col col-lg-2 col-md-6">' +
  '      <h2>Sidebar</h2>' +
  '      <p>' + loremText +
  '      </p>' +
  '    </section><!-- sidebar -->' +
  '  </div><!-- content -->' +
  '</section><!-- container -->';

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
  buildBodyIndex() +
  buildFooter();

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
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageSchedule = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageVenueTravel = function(pageURL) {
  var html = '' +
  buildHTMLHead(pageURL) +
  buildHeader() +
  buildBodyIndex() +
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
