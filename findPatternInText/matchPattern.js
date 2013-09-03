/*
<<<<<<< HEAD
Goal: Find # of occurrences of a text string.
=======
Goal: Find # of occurrences of a text string.  
>>>>>>> modalGallery
Choose a solution that uses recursion and closure instead
of simply using Regex.

My Pseudo Code
Does it find the pattern?
    Store the location of the hit in a variable
    Advance index of string and call same function to deal with now smaller substring
Eventually will not find it
    return
At end of recursion print number of instances found.
*/

(function() {

  var text = 'akl;jfakld;fjakl;sdjFredriklakj;dkl;fjadfFredrik;aldkfjakl;djFredrik';
  var myName = 'Fredrik';
  var hits = [];

  var createTextFinder = function() {

    var stackDepth = 0;
    var hitsLocation = [];

    return function findText(src, pat, loc) {
      console.log('StackDepth: ' + stackDepth);

      var substring = src.substring(loc, src.length);
      console.log('Current Substr: ' + substring);

      var srcMatchIndex = substring.indexOf(pat) + loc;
      var subMatchIndex = substring.indexOf(pat);
      var exists = (subMatchIndex != -1);
      console.log('Pattern still exists: ' + exists);

      if (exists) {
        hitsLocation.push(srcMatchIndex);
        console.log('Current HitsLoc: ' + hitsLocation +
                    '\n---------------------');
        stackDepth++;
        findText(src, pat, srcMatchIndex + 1);
        console.log('Walking back up the stack, Stack Depth: ' + --stackDepth);
      } else {
        return console.log('--------------------------\n' +
            'Your pattern was found: ' + hitsLocation.length +
            ' times.');
      }
    };
  };

  var textFinder = createTextFinder()(text, myName, 0);

})();
