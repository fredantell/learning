exports.listOfIndividualArtistLIs = function(arrayOfArtistObjs) {
  var html = '';
  arrayOfArtistObjs.forEach(function(artistObj) {
    html += '\n' +
      '<li><a href="artists#' + artistObj.shortname +
      '">' + artistObj.name + '</a></li>';
  });

  return html;
};

exports.getArtistsObj = function() {
  var artists = require('../../mock_api/artists.json');
  artists = artists.artists;
  return artists;
};

exports.capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
