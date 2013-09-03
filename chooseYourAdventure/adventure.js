(function() {
  'use strict';
  var yesNoMap = {'YES': '1', 'NO': '0'};

  var askQuestion = function(quest, ansKey) {
    var input = prompt(quest).toUpperCase();
    //noinspection UnnecessaryLocalVariableJS
    var answer = checkAnswer(quest, input, ansKey);
    return answer;
  };
  //noinspection FunctionWithInconsistentReturnsJS
  var checkAnswer = function(quest, answer, ansKey) {
    var answerInAnsKey = false;

    for (var option in ansKey) {
      if (option === answer) {
        answerInAnsKey = true;
        return answer;
      }
    }
    if (answerInAnsKey === false) {
      alert("Your answer didn't match the expected input.  Try again.");
      return askQuestion(quest, ansKey);
    }
  };
  var dispOutcome = function(bool, trueCond, falseCond) {
    if (bool) {
      alert(trueCond);
    } else {
      alert(falseCond);
    }
  };
  var processQuestion = function(obj) {
    var pts = 0;
    var len = obj.qArray.length;
    var ans;
    for (var i = 0; i < len; i++) {
      var currentQuestion = obj.qArray[i][0];
      var answerKey = obj.qArray[i][1];
      ans = askQuestion(currentQuestion, answerKey);
      pts += parseInt(answerKey[ans], 10);
      if ((len - i + 1) < (obj.ptsNeeded - pts)) {
        i = len;
      }
    }
    dispOutcome(pts >= obj.ptsNeeded, obj.win, obj.lose);
  };

  var fight = {
    logic: function() {
      processQuestion(fight);
    },
    qArray: [
      ['Are you smart? YES or NO', yesNoMap],
      ['Are you strong? YES or NO', yesNoMap]
    ],
    ptsNeeded: 1,
    win: 'You only needed one of those.  You win!',
    lose: "You chose to fight yet you're neither smart nor strong? What were you thinking!?"
  };

  var pay = {
    logic: function() {
      processQuestion(pay);
    },
    qArray: [
      ['Do you have money? YES or NO', yesNoMap],
      ['Is it in Troll Dollars? YES or NO', yesNoMap]
    ],
    ptsNeeded: 2,
    needBoth: true,
    win: 'You needed both.  You pay him off and leave.',
    lose: "Well, not only did you need money, but it needed to be in Troll$ (or AMEX).  You're toast."
  };

  var run = {
    logic: function() {
      processQuestion(run);
    },
    qArray: [
      ['Are you fast? YES or NO', yesNoMap],
      ['Did you get a headstart? YES or NO', yesNoMap]
    ],
    ptsNeeded: 1,
    win: 'You only needed one of those.  You got away!',
    lose: "You chose to run but you're slow with no headstart.  What were you thinking!?"
  };

  var question1 = {
    logic: function() {
      var answer = askQuestion(question1.qText, question1.qMap);
      var nextQuestion = question1.qMap[answer];
      nextQuestion();
    },
    qText: 'You run into a troll.  Will you FIGHT, PAY, or RUN?',
    qMap: {'FIGHT': fight.logic, 'PAY': pay.logic, 'RUN': run.logic}
  };

  // Start running program
  do {
    question1.logic();
  } while (confirm('Play again?'));

})();
