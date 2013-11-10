var allVenues = {};

allVenues.article = function() {

  var hotels = require('../../mock_api/hotels.json');
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

module.exports = allVenues;
