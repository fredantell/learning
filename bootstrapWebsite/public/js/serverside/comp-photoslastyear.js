var photosLastYear = {};

photosLastYear.aside = function() {
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

module.exports = photosLastYear;
