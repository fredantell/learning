var artElim = (function() {
  var grid = document.querySelector('ul.grid');
  console.log(grid);

  function setupLastPhotoInfo() {
    var lastPhoto = document.querySelector('ul.grid img');
    document.querySelector('h1').innerHTML = 'You chose: ';
    document.querySelector('p').innerHTML = '' +
        lastPhoto.getAttribute('data-artist') + "'s " +
        lastPhoto.getAttribute('alt');

    var lastPhoto = document.querySelector('ul.grid img');
    lastPhoto.thumbSrc = lastPhoto.getAttribute('src');
    lastPhoto.largeSrc = lastPhoto.thumbSrc.substring(0, lastPhoto.thumbSrc.length - 7) + '.jpg';
    document.querySelector('.largePic img').src = lastPhoto.largeSrc;

    document.querySelector('ul.grid').style.display = 'none';
    document.querySelector('.largePic').style.display = 'block';
  };

  function removePhoto(e) {
    grid.removeChild(e.target.parentNode);

    var numPhotosLeft = document.querySelectorAll('ul.grid li').length;
    if (numPhotosLeft === 1) {
      grid.removeEventListener('click', removePhoto, false);
      setupLastPhotoInfo();
    };
  }
  grid.addEventListener('click', removePhoto, false);
})();


