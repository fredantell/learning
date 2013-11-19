


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
      '<title>' + pageTitle + '</title>' +
      "<link href='./css/bootstrap.css' rel='stylesheet'>" +
      '<link href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">' +
      '<link href="./css/styles.css" rel="stylesheet">' +
      '</head>' +
      '<body id="' + pageTitle + '">' +
      '<section class="container">' +
      '<div class="container">';


  return html;
};
var buildHeader = function() {
  var navbarItems = [
//    { href: 'home',
//      menutext: 'Home'
//    },
    { href: 'arteliminator',
      menutext: 'Art Eliminator'
    },
    { href: 'jukebox',
      menutext: 'Jukebox'
    },
    { href: 'snowman',
      menutext: 'Snowman Game'
    }
  ];
  function buildNavBarLIs() {
    var html = '';
    for (var i = 0; i < navbarItems.length; i++) {
       html += '' +
           '<li><a href="' + navbarItems[i].href + '">' +
               navbarItems[i].menutext +
               '</a></li>';
    }
    return html;
  }

  var html = '' +

      '<header class="clearfix">' +

        '<section id="branding">' +
          //'<a href="home"><img src="img/misc/ralogo_monogram.png" alt="Logo for Roux Conference"></a>' +
        '</section><!-- branding -->' +

        '<section class="navbar navbar-default">' +
          '<ul class="nav navbar-nav">' +
            buildNavBarLIs() +
          '</ul><!-- nav -->' +
        '</section><!-- navbar -->' +

      '</header><!-- clearfix header -->';

  return html;
};

var buildFooter = function(scripts) {
  scripts = scripts || [];

  var html = '' +
      '</div><!-- end div.content row -->' + //close div from HTMLhead
      '<div class="container">' +
        '<footer class="content row">' +
//        '  <nav class="col-lg-12">' +
//        '    <ul class="breadcrumb">' +
//        '      <li><a href="about">About the Roux Academy</a></li>' +
//        '      <li><a href="privacypolicy">Privacy Policy</a></li>' +
//        '      <li><a href="http://rouxacademy.com">Roux Academy Website</a></li>' +
//        '    </ul>' +
//        '  </nav>' +
        '</footer>' +
      '</div>' +
    // '</section><!-- footer container -->' +
      '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>';
      //'<script src="js/bootstrap.js"></script>' +
      //'<script src="/js/myscript.js"></script>';

      for (var i = 0; i < scripts.length; i++) {
        html += '<script src="' + scripts[i] + '"></script>';
      }
      html += '' +
      '</section>' +  //close section from HTMLhead
      '</body>' +
      '</html>';

  return html;
};

var buildBodyIndex = function() {

  var html = '' +
      '';

  return html;

};

var buildBodyArtElim = function() {
  var buildArtElim = require('./public/js/artelim.js');

  var html = '' +
      buildArtElim() +
      '';

  return html;

};

var buildBodyJukebox = function() {
  var buildJukebox = require('./public/js/jukebox.js');

  var html = '' +
      buildJukebox() +
      '';

  return html;

};

var buildBodySnowman = function() {
  var buildSnowman = require('./public/js/snowman.js');

  var html = '' +
      buildSnowman() +
      '';

  return html;
};

var buildPage404 = function() {

  var html = '' +
      '<div>This page does not exist</div>';

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

var buildPageArtElim = function(pageURL) {
  var pageSpecificScripts = [
      'js/artelim-client.js'
  ];

  var html = '' +
      buildHTMLHead(pageURL) +
      buildHeader() +
      buildBodyArtElim() +
      buildFooter(pageSpecificScripts);

  return html;
};
var buildPageJukebox = function(pageURL) {
  var pageSpecificScripts = [
    'js/jukebox-client.js'
  ];

  var html = '' +
      buildHTMLHead(pageURL) +
      buildHeader() +
      buildBodyJukebox() +
      buildFooter(pageSpecificScripts);

  return html;
};
var buildPageSnowman = function(pageURL) {
  var pageSpecificScripts = [
    'js/snowman-client.js'
  ];

  var html = '' +
      buildHTMLHead(pageURL) +
      buildHeader() +
      buildBodySnowman() +
      buildFooter(pageSpecificScripts);

  return html;
};
//--------------------------------------
//--------------------------------------
//----Exports Section-------------------
//--------------------------------------
//--------------------------------------


var pageFns = {
  home: buildPageIndex,
  arteliminator: buildPageArtElim,
  jukebox: buildPageJukebox,
  snowman: buildPageSnowman
};

exports.createPage = function(key) {

  if (pageFns[key] === undefined) {
    return buildPage404();
  }

  return pageFns[key](key);
};