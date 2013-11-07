var siteFns = require('./site-functions.js');
var buildPhotoGrid = require('./comp-artistphotogrid.js');

var aboutTheArtists = {};

aboutTheArtists.article = function() {
  var html = '' +
    '<article class="articleAboutTheArtists"><h2>About the artists</h2>' +
    '   <p>The Roux Academy gets thousands of submissions every year for artists interesting in participating in the CAC exhibits, and selects approximately 200 distinct pieces of contemporary art for display in their collective exhibit.</p>' +
    '   <p class="hidden-sm hidden-xs">In addition, 12 individuals are honored as Featured Artists - each being granted his or her own exhibit hall to display entire collections or themed pieces. Each Featured Artist has an opportunity to speak at the conference to share his or her vision, perspective, and techniques with conference attendees. It is truly an honor to be a CAC Featured Artist and many past students artists who were featured at CAC have gone on to brilliant careers in art.' +
    '   </p>' +
    buildPhotoGrid() +
    '   <a href="artists" class="btn btn-danger">about the artists</a>' +
    '</article><!--aboutTheArtists-->';

  return html;
};

aboutTheArtists.aside = function() {

  var html = '' +
    '<aside class="asideAboutTheArtists"><h2>About the artists</h2>' +
    '  <p>Each Featured Artist has an opportunity to speak at the conference to share his or her vision, perspective, and techniques with conference attendees. To get more information about the artists click on one of their photos, or visit our <a href="artists.php">artists</a> page.</p>' +
    buildPhotoGrid() +
    '<a href="artists" class="btn btn-danger">about the artists</a>' +
    '</aside><!-- asideAboutTheArtists -->';

  return html;
};




module.exports = aboutTheArtists;