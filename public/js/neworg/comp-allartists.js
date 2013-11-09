var siteFns = require('./site-functions.js');
var fs = require('fs');

var allArtists = {};

allArtists.article = function() {
  var html = '' +

    '<section class="artistlist">' +
    '  <div id="artistindex" class="row">' +
    '' +
    '      <nav class="nav clearfix col col-md-3 hidden-xs hidden-sm" id="artistNavList">' +
    '        <ul class="nav nav-stacked affix">' +
    buildScrollSpyNavLIs() +
// '          <li class="artist">' +
// '            <a href="#artistName3">Artist Name</a>' +
// '          </li>' +
    '        </ul>' +
    '      </nav><!-- section#artistNavList -->' +
    '' +
    '      <section class="col col-md-9">' +
    buildArtistInfoforAllArtists() +
// '        <div id="artistName1" class="artistInfo">' +
// '          <h4>Arist So and So!</h4>' +
// '          <p>This is some information about the artist lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' +
// '        </div>' +
    '' +
    '      </section>' +
    '' +
    '' +
    '    </div><!-- artistindex -->' +
    '  </section>';

  return html;

};


function buildScrollSpyNavLIs() {
  var artists = siteFns.getArtistsObj();
  var html = '';

  artists.forEach(function(artist) {
    html += '' +
      '<li class="artistNav">' +
      '<a href="#' + artist.shortname + '"><i class="icon-user"></i> ' + artist.name + '</a>' +
      '</li>';
  });
  return html;
}

function buildArtistInfoforAllArtists() {
  var artists = siteFns.getArtistsObj();
  var artistImgPath = 'img/artists/';
  var artworkImgPath = 'img/artwork/';
  var html = '';

  artists.forEach(function(artist) {
    html += '' +
      '<article id="' + artist.shortname + '" class="media">' +
      '  <h2>' + artist.name + '</h2>' +
      '  <img class="pull-left img-rounded" src="' + artistImgPath + artist.shortname + '_tn.jpg" alt="Photo of ' + artist.name + '">' +
      '  <div class="media-body">' +
      artist.bio +
      artist.biolong +
      '    <section class="modalphotos photogrid">' +
      '      <h3>Artwork</h3>' +
      buildArtistArtworkTNs(artist, artworkImgPath) +
      // '      <img src="imges/artwork/Richard_Tweed_01_tn.jpg" alt="Art from Richard Tweed">' +
      // '      <img src="images/artwork/Richard_Tweed_02_tn.jpg" alt="Art from Richard Tweed">' +
      // '      <img src="images/artwork/Richard_Tweed_03_tn.jpg" alt="Art from Richard Tweed">' +
      // '      <img src="images/artwork/Richard_Tweed_04_tn.jpg" alt="Art from Richard Tweed">' +
      // '      <img src="images/artwork/Richard_Tweed_05_tn.jpg" alt="Art from Richard Tweed">' +
      // '      <img src="images/artwork/Richard_Tweed_06_tn.jpg" alt="Art from Richard Tweed">' +
      '    </section>' +
      '  </div><!-- media body -->' +
      '</article>';
  });

  return html;
}

function buildArtistArtworkTNs(artist, path) {
  var allFiles = fs.readdirSync('./public/' + path);
  var html = '';

  //filter files for artist and thumbnail version
  var files = [];
  allFiles.filter(function(f) {
    if (f.indexOf(artist.shortname) === -1) return;
    if (f.indexOf('_tn.jpg') != -1) {
      files.push(f);
    }
  });


  //return an empty string and skip this artist if he has no artwork files
  if (typeof files === 'undefined' || files.length < 1) {
    console.log("No artwork for this artist: ", artist.name);
    return '';
  }

  for (var i = 0; i < files.length; i++) {
    var num = i+1; //images are not 0 indexed
    //turn 5 into 05, etc;
    if (num < 10) {
      num = '0' + num.toString();
    }
    //example markup: <img src="img/artwork/Richard_Tweed_05_tn.jpg" alt="Art from Richard Tweed">
    html += '<img src="' + path + artist.shortname + '_' + num + '_tn.jpg" alt="Art from ' + artist.name + '">';
  }

  return html;
}

module.exports = allArtists;