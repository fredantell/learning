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

});/* document ready*/