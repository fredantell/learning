$(document).ready(function() {

  function toggleDropDown() {
    $(this).find('ul.dropdown-menu').slideToggle(100);
  }

  //automatically expand dropdown menu without requiring a click
  $('ul.nav li.dropdown').hover(toggleDropDown, toggleDropDown);

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
      attr('alt', e.target.alt);

    $('#modal').modal({
      show: true
    });

    $('#modal').on('click', function(e) {
      $('#modal').modal('hide');

    });

  });

});/* document ready*/


