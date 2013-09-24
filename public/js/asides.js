var helper = require('./helper.js');

var capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var buildSchedulePanels = function() {
  var schedData = require('../mock_api/schedule.json');
  schedData = schedData.schedule;

  var html = '';

  for (var i = 0; i < schedData.length; i++) {

    var day = capitalize(schedData[i].day);
    var description = schedData[i].desc;

    html += '' +
      '<!-- ' + day + '******************-->' +
      '<div class="panel panel-default">' +

      '  <div class="panel-heading">' +
      '    <h4 class="panel-title">' +
      '    <a class="accordion-toggle collapsed" data-toggle="collapse" href="#collapse' + day + '">' +
      '      <i class="icon-calendar"></i> ' + day +
      '    </a>' +
      '    </h4>' +
      '  </div>' +

      '  <div id="collapse' + day + '" class="panel-collapse collapse">' +
      '    <div class="panel-body">' +
      '      <p>' + description + '</p>' +
      '      <p><a href="schedule#' + day + '" class="btn btn-danger btn-sm">' + capitalize(day) + '\'s Schedule</a>' +
      '    </div>' +
      '  </div>' +

      '</div><!-- ' + day + 'panel + -->';
  }

  return html;
};




/**************************/
/**************************/
/*****Exports Section******/
/**************************/
/**************************/

exports.register = function() {
  var html = '' +
  '<aside class="register">' +
  '  <h2>Registration info</h2>' +
  '  <p>Fill <a href="register">our registration form</a> and we\'ll let you know when we begin the registration process. Then, get ready for the best conference in contemporary art.</p>' +
  '  <a href="register" class="btn btn-danger">Register now</a></p>' +
  '</aside>';

  return html;

};

exports.photosLastYear = function() {
  var html = '' +
  '<aside class="photosLastYear">' +
  '  <h2>Last year</h2>' +
  '  <p>Did you miss last year\'s conference? Check out some photos from the event.</p>' +
  '  <div class="modalphotos photogrid clearfix">' +
  '    <img src="img/slides/artist_on_table_tn.jpg" alt="Artist on a table">' +
  '    <img src="img/slides/at_the_museum_tn.jpg" alt="At the museum">' +
  '    <img src="img/slides/charcoal_artist_painting_tn.jpg" alt="Charcoal artist painting">' +
  '    <img src="img/slides/framing_workshop_tn.jpg" alt="Framing workshop">' +
  '    <img src="img/slides/glassmaking_workshop_tn.jpg" alt="Glassmaking workshop">' +
  '    <img src="img/slides/glassworking_workshop_tn.jpg" alt="Glassmaking workshop">' +
  '  </div>' +
  '</aside>';

  return html;
};

exports.schedule = function() {
  var html = '' +
  '<aside class="schedule">' +
  '  <h2>Schedule</h2>' +
  '  <p>There\'s a lot happening at our many workshops and talks. Make sure you check out the <a href="schedule">full schedule</a> for more information</p>' +
  '  <div class="panel-group" id="schedule">' +
  buildSchedulePanels() +
  '</div><!--panel-group-->' +
  '</aside>';

   return html;
};

exports.aboutTheArtists = function() {
  var articles = require('./articles.js');

  var html = '' +
  '<aside class="asideAboutTheArtists"><h2>About the artists</h2>' +
  '  <p>Each Featured Artist has an opportunity to speak at the conference to share his or her vision, perspective, and techniques with conference attendees. To get more information about the artists click on one of their photos, or visit our <a href="artists.php">artists</a> page.</p>' +
  helper.buildPhotoGrid() +
  '<a href="artists" class="btn btn-primary">about the artists</a>' +
  '</aside><!-- asideAboutTheArtists -->';

  return html;
};
