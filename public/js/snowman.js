/* This creates working markup, but all the images are placed on top of each other.
// It's easier to arrange them in the browser and then copy out the resulting positions
// If you were going to extend this project, you could add a DB and the ability to save and load
// particular creations.  As it is, this was a convenient way for me to not have to hand type
// markup for every single image.

var fs = require('fs');

function buildImgMarkup() {
  var html = '';

  var files = fs.readdirSync('public/img/snowman/');

  [].forEach.call(files, function(file) {
    html += '<img src="img/snowman/' + file + '"></img>';
  });

  return html;
}


module.exports = function() {
  var html = '' +
      '<div class="board">' +
      '' +
        buildImgMarkup() +
      '' +
      '</div>';

  return html;
};
*/

module.exports = function() {
  var html = '' +
      '<div class="board">' +
      '<img src="img/snowman/belt.svg" style="z-index: 1; left: 112px; top: 831px;"><img src="img/snowman/body.svg" style="z-index: 1; left: 508px; top: 334px;"><img src="img/snowman/eyes01.svg" style="z-index: 1; left: 410px; top: 439px;"><img src="img/snowman/eyes02.svg" style="z-index: 1; left: 330px; top: 491px;"><img src="img/snowman/eyes03.svg" style="z-index: 1; left: 229px; top: 479px;"><img src="img/snowman/eyes04.svg" style="z-index: 1; left: 203px; top: 360px;"><img src="img/snowman/eyes05.svg" style="z-index: 1; left: 264px; top: 409px;"><img src="img/snowman/eyes06.svg" style="z-index: 1; left: 225px; top: 284px;"><img src="img/snowman/hand_left01.svg" style="z-index: 1; left: 864px; top: 783px;"><img src="img/snowman/hand_left02.svg" style="z-index: 1; left: 868px; top: 860px;"><img src="img/snowman/hand_right01.svg" style="z-index: 1; left: 1001px; top: 804px;"><img src="img/snowman/hand_right02.svg" style="z-index: 1; left: 991px; top: 860px;"><img src="img/snowman/head01.svg" style="z-index: 1; left: 31px; top: 323px;"><img src="img/snowman/head02.svg" style="z-index: 1; left: 275px; top: 59px;"><img src="img/snowman/head03.svg" style="z-index: 1; left: 23px; top: 98px;"><img src="img/snowman/head04.svg" style="z-index: 1; left: 84px; top: 216px;"><img src="img/snowman/head05.svg" style="z-index: 1; left: 795px; top: 195px;"><img src="img/snowman/head06.svg" style="z-index: 1; left: 143px; top: 72px;"><img src="img/snowman/head07.svg" style="z-index: 1; left: 993px; top: 244px;"><img src="img/snowman/head08.svg" style="z-index: 2; left: 966px; top: 51px;"><img src="img/snowman/head09.svg" style="z-index: 1; left: 744px; top: 64px;"><img src="img/snowman/head10.svg" style="z-index: 1; left: 532px; top: 71px;"><img src="img/snowman/head11.svg" style="z-index: 1; left: 358px; top: 204px;"><img src="img/snowman/mouth01.svg" style="z-index: 1; left: 78px; top: 662px;"><img src="img/snowman/mouth02.svg" style="z-index: 1; left: 165px; top: 620px;"><img src="img/snowman/mouth03.svg" style="z-index: 1; left: 225px; top: 680px;"><img src="img/snowman/neck01.svg" style="z-index: 1; left: 1022px; top: 572px;"><img src="img/snowman/neck02.svg" style="z-index: 1; left: 992px; top: 421px;"><img src="img/snowman/neck03.svg" style="z-index: 1; left: 862px; top: 536px;"><img src="img/snowman/neck04.svg" style="z-index: 1; left: 1002px; top: 636px;"><img src="img/snowman/neck05.svg" style="z-index: 1; left: 814px; top: 371px;"><img src="img/snowman/nose01.svg" style="z-index: 1; left: 224px; top: 741px;"><img src="img/snowman/nose02.svg" style="z-index: 1; left: 52px; top: 587px;"><img src="img/snowman/nose03.svg" style="z-index: 1; left: 257px; top: 601px;"><img src="img/snowman/nose04.svg" style="z-index: 1; left: 160px; top: 724px;">' +
      '</div>';
return html;
};
