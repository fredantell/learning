var jukeboxApp = (function() {

  var jukebox = document.querySelector('.jukebox ul');
  jukebox.addEventListener('click', handleClick, false);


  function handleClick(e) {
    e.preventDefault();
    var el;
    if (e.target.nodeName === 'A') {
      el = e.target.parent();
    } else {
      el = e.target;
    };

    var actionToTake = {
      playing: pauseSong,
      paused: resumeSong,
      nothing: playSong
    };
    if (typeof actionToTake[el.className] === 'undefined') {
      el.className = 'nothing';
    }
    actionToTake[el.className](el);
  }
  function pauseSong(el) {
    el.className = 'paused';
    document.querySelector('audio').pause();
  }
  function playSong(el) {
    var list = document.querySelectorAll('.jukebox ul li');
    for (var i = 0; i < list.length; i++) {
      list[i].className = '';
    }
    var audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
      audioPlayer.parentNode.removeChild(audioPlayer);
    }

    el.className = 'playing';

    var player = document.createElement('audio');
    player.src = el.getAttribute('data-src');
    document.body.appendChild(player);
    player.addEventListener('ended', function finishedPlaying() {
      console.log('end fired');
      el.className = '';
      player.removeEventListener('ended', finishedPlaying, false);
    }, false);
    player.play();
  }
  function resumeSong(el) {
    el.className = 'playing';
    var player = document.querySelector('audio');
    player.play();
  }

})(); //end IIFE
