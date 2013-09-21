// var buildData = function() {
//   var data = require('./data.json');
//   var html = '' +
//   '<div>' +
//   JSON.stringify(data) +
//   '</div>';
//   return html;
// };

//-------------------------------
//----Builders for page sections-
//-------------------------------

var buildHeader = function(pageTitle) {
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

var buildFooter = function() {
  var html = '' +
  '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>' +
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



//-------------------------------
//----Builders for whole pages---
//-------------------------------

var buildPageIndex = function() {
  var html = '' +
  buildHeader('index') +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageAbout = function() {
  var html = '' +
  buildHeader('index') +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageArtists = function() {
  var html = '' +
  buildHeader('index') +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPagePrivacyPolicy = function() {
  var html = '' +
  buildHeader('index') +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageRegister = function() {
  var html = '' +
  buildHeader('index') +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageSchedule = function() {
  var html = '' +
  buildHeader('index') +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPageVenueTravel = function() {
  var html = '' +
  buildHeader('index') +
  buildBodyIndex() +
  buildFooter();

  return html;
};

var buildPage404 = function() {
  var html = '' +
  buildHeader('404 page not found') +
  '<div style="font-size:40px; text-align:center; margin-top:50px;">' +
  'Sorry this page does not exist</div>' +
  buildFooter();

  return html;
};
var buildPageFredrik = function() {
  var html = '' +
  buildHeader('404 page not found') +
  '<div style="font-size:40px; text-align:center; margin-top:50px;">' +
  'Wowaweewa!  You got it working!</div>' +
  buildFooter();

  return html;
};

//-------------------------------
//----Exports Section------------
//-------------------------------

exports.createPage = function(key) {
  var pageFns = {
    index: buildPageIndex,
    about: buildPageAbout,
    artists: buildPageArtists,
    privacypolicy: buildPagePrivacyPolicy,
    register: buildPageRegister,
    schedule: buildPageSchedule,
    venuetravel: buildPageVenueTravel,
    fredrik: buildPageFredrik
  };

  if (pageFns[key] === undefined) {
    return buildPage404();
  }

  return pageFns[key]();
};



var loremText = 'Wowaweewa!  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
