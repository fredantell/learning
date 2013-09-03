(function() {
  var result = {
    'rock': {
      'rock': "It's a tie! Rocks all around!",
      'paper': 'You lose.. :( Paper covers rock',
      'scissors': 'You win! Rock beats scissors!'
    },
    'paper': {
      'rock': 'You win! Paper covers rock!',
      'paper': "It's a tie! Paper all around.",
      'scissors': 'You lose.. :( Scissors cut paper.'
    },
    'scissors': {
      'rock': 'You lose.. :( Rock beats scissors.',
      'paper': 'You win! Scissors cut paper!',
      'scissors': "It's a tie! Scissors all around."
    }
  };

  var getChoices = function() {
    var userChoice = prompt('Do you choose rock, paper or scissors?').toLowerCase();
    if (!(userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors')) {
      alert("I'm sorry. You need to choose rock, paper, or scissors.  Try again.");
      userChoice = (getChoices())[0]; //The function returns an array.  index[0] == userChoice.
      //The computer ends up making a choice that I discard when I recurse.  If that is an
      //issue I could have also written this as a loop.  If this section were more complicated
      // I could also have abstracted the userChoice to its own
      //function I could recurse without this side effect.
    }
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = 'rock';
    } else if (computerChoice <= 0.67) {
      computerChoice = 'paper';
    } else {
      computerChoice = 'scissors';
    }

    return [userChoice, computerChoice];
  };

  var lookupResult = function(choice1, choice2) {
    console.log('You chose: ' + choice1 +
                '\nComputer chose: ' + choice2);
    var outcome = result[choice1][choice2];
    console.log(outcome);
    if (!(outcome.indexOf('win') == -1)) {
      return 1;
    }
    if (!(outcome.indexOf('tie') == -1)) {
      return 0;
    }
    if (!(outcome.indexOf('lose') == -1)) {
      return -1;
    }



  };

  var createNewRPSGame = function() {
    var winsPlayer = 0,
        winsComputer = 0,
        outcome;
    return function() {

      var choices = getChoices();
      outcome = lookupResult(choices[0], choices[1]);
      switch (outcome) {
        case 1:
          winsPlayer++;
          break;
        case 0:
          console.log('No change in score');
          break;
        case -1:
          winsComputer++;
          break;
      }
      console.log('The score is\n Player: ' + winsPlayer +
              '\nComputer: ' + winsComputer);
    }
  };
  var playRPS = createNewRPSGame();

  do {
    playRPS();
  } while (confirm('Play again?'));
})();

//If I were going to refactor this, I'd pull the scoring logic out of
// lookupResult.  Instead it would go into the result object uptop.
// When I can just store it there, I dont need to re-deduce who won in my code.
//It might also make it easier to add some fun flexibility like the
// ability to award extra points for winning with rock, etc.
