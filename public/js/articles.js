var helper = require('./helper.js');
var fs = require('fs');

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
      helper.buildPhotoGrid() +
 '   <a href="artists" class="btn btn-primary">about the artists</a>' +
 '</article><!--aboutTheArtists-->';

  return html;
};

exports.aboutTheVenue = function() {
  var html = '' +
  '<article class="aboutTheVenue media">' +
  '  <h2>About the venue</h2>' +
  '  <a href="venuetravel" class="pull-right"><img src="img/hotels/contempo.jpg" alt="Photo of Hotel Contempo"></a>' +
  '  <div class="media-body">' +
  '    <p>All CAC speaking events and gallery exhibits take place inside Hotel Contempo, located at 309 1st Avenue, in Downtown Seattle. Just a walk to the beach, the Space Needle, and a diverse sampling of restaurants and shopping makes the venue a much sought-after location for gatherings and conferences, year after year.</p>' +
  '    <p class="hidden-sm hidden-xs">Hotel Contempo is the perfect spot for a gathering of modern artists. Not only are the conference rooms and halls decked with breathtaking contemporary art and sculptures, but the individual rooms are as unique as the renowned artists who were commissioned to decorate them. From the Ross Monroe Purple suite filled wall to wall with paintings in his signature palette of violet and lavender to the Tess Lessinger Sculpted Universe suite, with dozens of original sculptures, including the bronze-casted toilet, visitors are sure to be intrigued and comforted during their stay at Hotel Contempo.  For those who opt to stay at another location, there is certainly no shortage of hotels in Downtown Seattle. Ranging from shabby chic to the ultimate in sophistication - there is a something to suit everyone\'s taste.</p>' +
  '  </div>' +
  '</article>';

  return html;

};

exports.allVenues = function() {

  var hotels = require('../mock_api/hotels.json');
  hotels = hotels.hotels;
  var hotelImgPath = 'img/hotels/';

  var html = '' +
  '<article class="aboutthevenues">' +
  '  <section class="primaryHotel">' +
  '  <h2>About the venue</h2>' +
  ' <article class="media">' +
  '   <img class="pull-left" src="' + hotelImgPath + hotels.primary.image + '" alt="' + hotels.primary.alt + '">' +
  '   <div class="media-body">' +
        hotels.primary.description +
  '   </div>' +
  ' </article><!--media -->' +
  ' </section><!--primaryHotel-->' +

  '<section class="otherHotels">' +
  ' <h2>Other hotels</h2>';

  for (var i = 0; i < hotels.other.length; i++) {
    html += '' +
    ' <article class="media">' +
    '     <h3>' + hotels.other[i].hotel + '</h3>' +
    '     <img class="pull-right img-rounded" src="' + hotelImgPath + hotels.other[i].image + '" alt="' + hotels.other[i].alt + '">' +
    '     <p class="media-body">' + hotels.other[i].description + '</p>' +
    ' </article>';
  }

  html += '</section><!-- otherHotels -->' +
  '</article><!--aboutthevenues-->';

return html;
};

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
  var artists = helper.getArtistsObj();
  var schedule = require('../mock_api/classes.json');

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

exports.schedule = function() {

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


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//All artists page code


exports.allArtists = function() {
  var html = '' +

  '<section class="artistlist">' +
  '  <div id="artistindex" class="row">' +
'' +
'      <section class="clearfix col col-md-3 hidden-xs hidden-sm" id="artistNavList">' +
'        <ul class="nav nav-stacked affix">' +
              buildScrollSpyNavLIs() +
// '          <li class="artist">' +
// '            <a href="#artistName3">Artist Name</a>' +
// '          </li>' +
'        </ul>' +
'      </section><!-- section#artistNavList -->' +
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
  var artists = helper.getArtistsObj();
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
  var artists = helper.getArtistsObj();
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


//Build Nav get scrollspy working
//Build example markup for artist's info.  Look to see if any examples diverge.
//Decide on data structure that I can plug into templating for artist's info


//Data Structure
  //About the artist at top
    //Heading
    //Body
  //Artists array
    //Artist Object
      //Artist_sn
      //Artist full name
      //Artist bio

//Read directory for files and generate img markup for each thumbnail