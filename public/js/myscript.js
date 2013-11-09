$(document).ready(function() {

  // dropdown menu for main site navigation
  function toggleDropDown() {
    $(this).find('ul.dropdown-menu').slideToggle(100);
  }

  //automatically expand main nav dropdown menu without requiring a click
  $('ul.nav li.dropdown').hover(toggleDropDown, toggleDropDown);

  //It seems as if bootstrap markup makes it so that the "all artists" dropdown toggle
  //does not follow the link when clicked.  So, add in an event handler to send it to
  //its logical destination and thereby make the UI a bit friendlier.
  $('ul.nav li.dropdown a.dropdown-toggle').on('click', function(e) {
    window.location.pathname = 'artists';
  });

  //automatically highlight the appropriate nav element
  //this works because the build function for each page
  //is being passed an argument that exactly matches the
  //url of the link.  If this assumed behavior changes, this
  //will break.
  var bodyId = $('body').attr('id');
  var linkWithBodyId = $('ul.nav a[href="' + bodyId + '"]');
  linkWithBodyId.parent().addClass('active');

  //show tooltips
  $("[data-toggle='tooltip']").tooltip({animation: true});

  //show modals
  $('.modalphotos img').on('click', function(e) {
    var smImageSrc = e.target.src.toString();
    smImageSrc = smImageSrc.slice(smImageSrc.indexOf('img'), smImageSrc.length);
    var lgImageSrc = smImageSrc.slice(0, smImageSrc.length - 7) + '.jpg';

    $('#modalimage').
      attr('src', lgImageSrc).
      attr('alt', e.target.alt).
      css('max-width', '100%').
      css('max-height', '100%').
      css('display', 'block').
      css('margin', '0 auto');

    $('#modal').modal({
      show: true
    });

    $('#modal').on('click', function(e) {
      $('#modal').modal('hide');
    });

  });

  var expandScheduleAccordionIfRoom = function() {
    'use strict';
    //if the page isn't using the schedule aside, then return
    if ($('section.sidebar aside.schedule').length === 0) {
      return;
    }

    var heightofDoc = $('body')[0].scrollHeight;
    var panels = [
      '#collapseMonday',
      '#collapseTuesday',
      '#collapseWednesday',
      '#collapseThursday',
      '#collapseFriday'
      ];
    var lastPanel = 'a.accordion-toggle[href=' + panels[panels.length - 1] + ']';
    lastPanel = $(lastPanel);

    for (var i = 0; i < panels.length; i++) {
      var lastPanelOffset = lastPanel.offset().top;
      if (lastPanelOffset < heightofDoc - 100) {
        $(panels[i]).toggleClass('in').toggleClass('collapse');
      }
    }
  }();

  //Add bootstrap classes to photos
  $('aside.photosLastYear img').addClass('img-thumbnail');
  $('section.artistlist .modalphotos img').addClass('img-circle');
  $('article.articleAboutTheArtists img').addClass('img-circle');

  //automatically select the tabbed content for Monday on teh schedule page
  //if the user has not explicitly requested a day
  var path = window.location.pathname;
  var schedHash = window.location.hash || '#Monday';
  if (path === '/schedule' && schedHash) {
    $('ul.nav a[href="' + schedHash + '"]').tab('show');
  }

});/* document ready*/


