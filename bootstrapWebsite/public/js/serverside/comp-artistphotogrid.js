

var buildPhotoGridArtist = function() {
  var html = '';

  var artists = require('./site-functions.js').getArtistsObj();

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

var buildPhotoGrid = function() {
  var html = '' +
    '<div class="component photogrid clearfix">' +
    buildPhotoGridArtist() +
    '</div><!--photogrid-->';

  return html;
};

module.exports = buildPhotoGrid;
