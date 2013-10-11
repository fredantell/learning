 /*Helper Functions*/


 var buildPhotoGridArtist = function() {
  var html = '';

  var artists = exports.getArtistsObj();

  artists.forEach(function(artistObj) {
    html += '\n' +
      '<a href="artists#' + artistObj.shortname + '">' +
      '<img data-toggle="tooltip" data-original-title="' + artistObj.name +
      '" src="img/artists/' + artistObj.shortname + '_tn.jpg"' +
      ' alt="Photo of ' + artistObj.name + '"></a>';
      //example: <a href="artists#Barot_Bellingham"><img data-toggle="tooltip" data-original-title="Barot Bellingham" src="images/artists/Barot_Bellingham_tn.jpg" alt="Photo of Barot Bellingham"></a>
  });
  return html;

};

var createArtistLookupTable = function() {
  var artists = getArtistsObj();
  var lookupTable = {};

  for (var i = 0; i < artists.length; i++) {
    lookupTable.artists[i].shortname = 'artists[' + i + ']';
  }

  return lookupTable;
};



exports.getArtistsObj = function() {
  // realistically this would be replaced with a http
  // request instead of reading the file directly
  // since in a production environment the server would
  // be generating the JSON and it wouldn't be a static file
  // sitting there waiting to be included via a require()
  var artists = require('../mock_api/artists.json');
  artists = artists.artists;
  return artists;
};

exports.buildPhotoGrid = function() {
  var html = '' +
  '<div class="component photogrid clearfix">' +
  buildPhotoGridArtist() +
  '</div><!--photogrid-->';

  return html;
};