var buildHeader = function() {
  var html = '' +
    '<section class="container">' +
    '<div class="container">' +

    '<section id="modal" class="modal fade">' +
    '  <div class="modal-body">' +
    '    <img id="modalimage" src="" alt="" style="max-width:100%">' +
    '  </div><!--modal-body-->' +
    '</section>' +

    '<div class="content row">' +
    '  <div class="col-lg-12">' +
    '    <header class="clearfix">' +

    '      <section id="branding">' +
    '        <a href="home"><img src="img/misc/ralogo_monogram.png" alt="Logo for Roux Conference"></a>' +
    '      </section><!-- branding -->' +

    '      <section class="navbar navbar-default">' +
    '        <ul class="nav navbar-nav">' +
    '          <li><a href="home">Home</a></li>' +
    '          <li><a href="venuetravel">Venue/Travel</a></li>' +
    '          <li><a href="schedule">Schedule</a></li>' +
    '          <li class="dropdown">' +
    '            <a class="dropdown-toggle" data-toggle="dropdown" href="#">All artists<span class="caret"></span></a>' +
    '            <ul class="dropdown-menu">' +
    '              <li><a href="artists">All artists</a></li>' +
    '              <li class="divider"></li>' +
    listOfIndividualArtistLIs(helper.getArtistsObj()) +
    '            </ul><!-- dropdown menu -->' +
    '          </li><!-- dropdown class -->' +
    '          <li><a href="register">Register</a></li>' +
    '        </ul><!-- nav -->' +
    '      </section><!-- navbar -->' +

    '    </header><!-- clearfix header -->' +
    '  </div><!-- column -->' +
    '</div><!-- content -->';

  return html;
};
