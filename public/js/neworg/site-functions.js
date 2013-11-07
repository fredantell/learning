
exports.getArtistsObj = function() {
  // realistically this would be replaced with a http
  // request instead of reading the file directly
  // since in a production environment the server would
  // be generating the JSON and it wouldn't be a static file
  // sitting there waiting to be included via a require()
  var artists = require('../../mock_api/artists.json');
  artists = artists.artists;
  return artists;
};