var siteFns = require('./site-functions.js');


function createScheduleTabHeadings(weekdays) {
  var html = '';

  for (var i = 0; i < weekdays.length; i++) {
    html += '<li><a href="#' + weekdays[i] + '" data-toggle="tab">' + weekdays[i] + '</a></li>';
  }

  return html;
}

function createScheduleTabContent(schedule, day) {
  day = schedule[day];

  var html = '' +
    '<div class="tab-pane fade" id="' + day.day + '">' +
    '<h2>' + day.overview.header + '</h2>' +
    '<p>' + day.overview.description + '</p>';

  for (var i = 0; i < day.events.length; i++) {
    var event = day.events[i];

    html += '' +
      '<section class="media">';

    //some events are not hosted by artists so skip the image and link

    if (typeof event.artist !== 'undefined' &&
      typeof event.artist.shortname === 'string') {
      html += '<a href="artists#' + event.artist.shortname + '" class="pull-left"' +
        ' data-toggle="tooltip" title data-original-title="' + event.artist.name + '">' +
        '<img class="img-rounded" src="img/artists/' + event.artist.shortname + '_tn.jpg"' +
        ' alt="Photo of ' + event.artist + '"></a>';
    }

    html += '' +
      '<div class="media-body">' +
      '<h4>' + event.time + '</h4>' +
      '<h3>' + event.title + '</h3>' +
      '<h4>' + event.location + '</h4>' +
      '<p>' + event.description + '</p>' +
      '</div><!--media-body-->' +
      '</section><!--media-->';
  }
  html += '</div><!-- tab-pane div#' + day.day + '-->';

  return html;
}

function fetchScheduleData() {
  var artists = siteFns.getArtistsObj();
  var schedule = require('../../mock_api/classes.json');

  //make artist lookup table
  var artistLookup = {};
  for (var i = 0; i < artists.length; i++) {
    var name = artists[i].shortname;
    artistLookup[name] = i;
  }

  //fake a SQL Join by augmenting the schedule obj to include the artist
  var nameToJoinOn;
  for (var day in schedule) {
    if (! schedule.hasOwnProperty(day)) continue;
    for (var j = 0; j < schedule[day].events.length; j++) {
      if (typeof schedule[day].events[j].artist === 'object') continue;
      nameToJoinOn = schedule[day].events[j].artist_sn;
      schedule[day].events[j].artist = artists[artistLookup[nameToJoinOn]];
      delete schedule[day].events[j].artist_sn;
    }
  }

  return schedule;
}

var schedule = {};

schedule.article = function() {

  var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  var schedule = fetchScheduleData();

  var html = '' +
    '<article class="schedule">' +
    '<h1>Schedule</h1>' +
    '<p>The Roux Academy gets thousands of submissions every year for artists interesting in participating in the CAC exhibits, and selects approximately 200 distinct pieces of contemporary art for display in their collective exhibit. In addition, 12 individuals are honored as Featured Artists - each being granted his or her own exhibit hall to display entire collections or themed pieces. Each Featured Artist has an opportunity to speak at the conference to share his or her vision, perspective, and techniques with conference attendees. It is truly an honor to be a CAC Featured Artist and many past students artists who were featured at CAC have gone on to brilliant careers in art.</p>' +
    '</article><!-- schedule -->' +

    '<section class="tabs">' +
    '<div class="menu">' +
    '<ul class="nav nav-tabs">' +
    createScheduleTabHeadings(weekdays) +
    '</ul>' +
    '</div>' +

    '<div class="tab-content">';

  for (var day in schedule) {
    if (! schedule.hasOwnProperty(day)) continue;
    html += createScheduleTabContent(schedule, day);
  }

  html += '</div><!-- end div.tab-content -->' +
    '</section> <!-- end section.tabs -->';

  return html;
};

// Asides functions for schedule

var buildSchedulePanels = function() {
  var schedData = require('../../mock_api/schedule.json');
  var capitalize = require('./site-functions.js').capitalize;
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

schedule.aside = function() {
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


//////Export Object
module.exports = schedule;

