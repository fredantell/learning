/**
 * Created by FredAdmin on 11/16/13.
 */

var buildPhotoGrid = function() {
  var html = '';
  html += '<ul class="grid">';

  for (var i = 0; i < artwork.artwork.length; i++) {
    var piece = artwork.artwork[i];
    html += '<li class="photo"><img src="img/art/' + piece.thumbnail + '"' +
        ' alt="' + piece.title + ' ' +
        '" data-artist="' + piece.artist +
        '"/></li>';
  }
  html += '</ul>';

  return html;
};

var buildArtEliminator = function() {
  var html = '' +
      '<body>' +
        '<div class="artElimContainer">' +
          '<h1>Art Eliminator</h1>' +
          '<p>Click on the artwork that you like the least and it ' +
              'will be eliminated.  When only your favorite piece ' +
              'remains we\'ll display some information about it.' +
          '</p>' +
          buildPhotoGrid() +
        '</div>' +
        '<div class="largePic">' +
          '<img></img>' +
        '</div>';

  return html;
};

module.exports = buildArtEliminator;

var artwork = {
  "artwork": [
    {
      "artist": "Constance Smith",
      "filename": "Constance_Smith_03.jpg",
      "thumbnail": "Constance_Smith_03_tn.jpg",
      "title": "Metal with Orange"
    },
    {
      "artist": "Hassum Harrod",
      "filename": "Hassum_Harrod_03.jpg",
      "thumbnail": "Hassum_Harrod_03_tn.jpg",
      "title": "Autumn Road"
    },
    {
      "artist": "Hillary Goldwynn",
      "filename": "Hillary_Goldwynn_03.jpg",
      "thumbnail": "Hillary_Goldwynn_03_tn.jpg",
      "title": "Shadows of the Depth"
    },
    {
      "artist": "Jennifer Jerome",
      "filename": "Jennifer_Jerome_01.jpg",
      "thumbnail": "Jennifer_Jerome_01_tn.jpg",
      "title": "Beach walkers"
    },
    {
      "artist": "Jennifer Jerome",
      "filename": "Jennifer_Jerome_02.jpg",
      "thumbnail": "Jennifer_Jerome_02_tn.jpg",
      "title": "Competition"
    },
    {
      "artist": "LaVonne LaRue",
      "filename": "LaVonne_LaRue_02.jpg",
      "thumbnail": "LaVonne_LaRue_02_tn.jpg",
      "title": "Graffiti on Brick"
    },
    {
      "artist": "LaVonne LaRue",
      "filename": "LaVonne_LaRue_04.jpg",
      "thumbnail": "LaVonne_LaRue_04_tn.jpg",
      "title": "Village Oasis"
    },
    {
      "artist": "Lorenzo Garcia",
      "filename": "Lorenzo_Garcia_01.jpg",
      "thumbnail": "Lorenzo_Garcia_01_tn.jpg",
      "title": "Sink Hole"
    },
    {
      "artist": "Lorenzo Garcia",
      "filename": "Lorenzo_Garcia_03.jpg",
      "thumbnail": "Lorenzo_Garcia_03_tn.jpg",
      "title": "Ambition"
    }
  ]
};