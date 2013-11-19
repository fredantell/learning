var dragndrop = (function() {

  var imgX = '';
  var imgY = '';
  var activeImg = '';

  var board = document.querySelector('div.board');
  board.addEventListener('dragstart', handleDragStart, false);
  board.addEventListener('dragover', handleDragOver, false);
  board.addEventListener('drop', handleDrop, false);

  function resetZ() {
    var allImgs = document.querySelectorAll('div.board img');
    for (var i = 0; i < allImgs.length; i++) {
      allImgs[i].style.zIndex = "1";
    }
  }
  function handleDragStart(e) {
    activeImg = e.target;
    imgX = (typeof e.offsetX === 'undefined') ? e.layerX : e.offsetX;
    imgY = (typeof e.offsetY === 'undefined') ? e.layerY : e.offsetY;

    //set z value for everything else to 1
    //set z value of srcElement to 2
    resetZ();
    e.srcElement.style.zIndex = "2";
  }
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDrop(e) {
    e.preventDefault();
    activeImg.style.left = e.pageX - imgX + 'px';
    activeImg.style.top = e.pageY - imgY + 'px';
  }

})();
