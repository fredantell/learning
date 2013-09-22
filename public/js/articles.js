var buildPhotoGridArtist = function() {
  var html = '';

  var artists = require('../mock_api/artists.json');
  artists = artists.artists;
  
  artists.forEach(function(artistObj) {
    html += '\n' +
      '<a href="artists#' + artistObj.shortname + '">' +
      '<img data-toggle="tooltip" data-original-title="' + artistObj.name +
      '" src="img/artists/' + artistObj.shortname + '_tn.jpg"' +
      ' alt="Photo of ' + artistObj.name + '"></a>';
      //example: <a href="artists.php#Barot_Bellingham"><img data-toggle="tooltip" data-original-title="Barot Bellingham" src="images/artists/Barot_Bellingham_tn.jpg" alt="Photo of Barot Bellingham"></a>
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


exports.main = function() {
  var html = '' +
  '<article class="intro"><h2>Contemporary Art conference</h2>' +
  '<p>Join over 500 hundred of the most creative and brilliant minds of art colleges all around the world for five days of lectures by world-renowned art scholars and artists, and seven days and nights of gallery exhibits featuring the best in contemporary art, including painting, sculpture, and more, in the beautiful halls of Hotel Contempo in the heart of Seattle.</p>' +
  "<p>The Roux Academy's annual conference and exhibit is designed to foster a close-knit relationship amongst artists at various universities around the world. No matter what school you attend - if you're an art student at an accredited art school anywhere in the world, you can attend the conference. But sign up early, as this not-to-miss conference sells out quickly, and the waiting list is long. In addition, art students are encouraged to send in works from their school portfolios to be considered for hanging in the CAC exhibit halls, as well as to be selected as a Featured Artist." +
  '</p></article>';

  return html;
};

exports.aboutTheArtists = function() {
  var html = '' +
 '<article class="articleAboutTheArtists"><h2>About the artists</h2>' +
 '   <p>The Roux Academy gets thousands of submissions every year for artists interesting in participating in the CAC exhibits, and selects approximately 200 distinct pieces of contemporary art for display in their collective exhibit.</p>' +
 '   <p class="hidden-sm hidden-xs">In addition, 12 individuals are honored as Featured Artists - each being granted his or her own exhibit hall to display entire collections or themed pieces. Each Featured Artist has an opportunity to speak at the conference to share his or her vision, perspective, and techniques with conference attendees. It is truly an honor to be a CAC Featured Artist and many past students artists who were featured at CAC have gone on to brilliant careers in art.' +
 '   </p>' +
      buildPhotoGrid() +
 '   <a href="artists" class="btn btn-primary">about the artists</a>' +
 '</article><!--aboutTheArtists-->';
  
  return html;
};
