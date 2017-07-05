let bestOfNumber;
let myScore;
let computerScore;

function getWinningScore() {
  myScore = 0;
  computerScore = 0;
  bestOfNumber = Number(prompt("Let's play 'Rock, Paper, Scissors.' Let's play best of: \n (Be sure it is an odd number)"));
  if (typeof bestOfNumber === 'number' && (bestOfNumber % 2 === 1 || bestOfNumber === 1)) {
    playGame();
  } else {
    getWinningScore();
  }
};

let option = function() {
  return Math.floor(Math.random() * 3);
};
let computer;
let me;
let message;
const array = ['rock', 'paper', 'scissors'];
function announceScore() {
  alert('The score is \nYou: ' + myScore + ' Computer: ' + computerScore + '.');
}

function assignment() {
  computer = array[option()];
  message = 'You chose ' + me + '. The computer chose ' + computer + '. ';
}

function playGame() {
  let winningScore = bestOfNumber / 2;
  me = prompt('What is your choice? Rock, scissors, or paper?').toLowerCase();
  assignment();
  if (me === 'rock' || me === 'paper' || me === 'scissors') {
    if (me === computer) {
      alert(message + 'This round is a tie.');
      announceScore();
      playGame();
    } else if ((me === 'rock' && computer === 'paper') || (me === 'paper' && computer === 'scissors') || (me === 'scissors' && computer === 'rock')) {
      computerScore++;
      if (computerScore > winningScore) {
        alert("You lost. The computer won " + computerScore + " to " + myScore + ". \nLet's play again!");
        getWinningScore();
      } else {
        alert(message + 'The computer wins this round.');
        announceScore();
        playGame();
      }
    } else {
      myScore++;
      if (myScore > winningScore) {
        alert("You win! You beat the computer " + myScore + " to " + computerScore + ". \nLet's play again!");
        getWinningScore();
      } else {
        alert(message + 'You win this round.');
        announceScore();
        playGame();
      }
    }
  } else {
      playGame();
  }
};

getWinningScore();

playGame();
