/**
 * Created with JetBrains WebStorm.
 * User: FredAdmin
 * Date: 8/22/13
 * Time: 12:10 PM
 * To change this template use File | Settings | File Templates.
 */


/*Add Event Listener to the parent element
* Screen the click events to see if the target was the img
* */


(function() {

  var galleryNode = document.querySelector('#galleryContainer ul');
  galleryNode.addEventListener('click', function(e) {

    if (e.target.nodeName === 'IMG') {
      var screenOverlay = document.createElement('div');
      screenOverlay.id = 'screenOverlay';
      document.body.appendChild(screenOverlay);

      //set up overlay styles
      screenOverlay.style.position = 'absolute';
      screenOverlay.style.top = 0;
      screenOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';

      //resize and position overlay
      screenOverlay.style.width = '100%' + '';
      screenOverlay.style.height = '100%' + '';

      //Create an IMG Node to append to Overlay
      var largeImage = document.createElement('img');
      largeImage.id = 'largeImage';
      largeImage.className += ' Absolute-Center';
      largeImage.src = e.target.src;
      largeImage.style.cursor = 'pointer';

      //Set Height and Width of Image and add to document
      sizeImage(largeImage);
      screenOverlay.appendChild(largeImage);

      //Follow Scroll
      window.addEventListener('scroll', function() {
        if (screenOverlay === 'undefined') return;
        screenOverlay.style.top = window.pageYOffset + 'px';
        screenOverlay.style.left = window.pageXOffset + 'px';
      }, false);
      window.addEventListener('resize', function() {
        if (screenOverlay === 'undefined') return;
        sizeImage(largeImage);
      }, false);

      //Remove Modal when user clicks on image
      screenOverlay.addEventListener('click', function(e) {
        if (e.target.id === 'largeImage') {
          screenOverlay.parentNode.removeChild(screenOverlay);
          window.removeEventListener('scroll', window, false);
          window.removeEventListener('resize', window, false);
        }
      }, false);

    }

  }, false);

  var sizeImage = function(theImage) {

    var ratioHeight = (window.innerHeight / theImage.naturalHeight);
    var ratioWidth = (window.innerWidth / theImage.naturalWidth);

    theImage.height = theImage.naturalHeight * Math.min(ratioHeight, ratioWidth, 1);
    theImage.width = theImage.naturalWidth * Math.min(ratioHeight, ratioWidth, 1);

    return theImage;
  };


})();
