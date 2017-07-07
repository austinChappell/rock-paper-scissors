let rockButton = document.querySelector('#rock-button');

/* Added by Jeff */

let player1;
function playerName() {
  player1 = prompt("What is your name?");
}
playerName();
document.getElementById("user").innerHTML = "<span>" + player1 + "</span";

/* Prompts for name and prints on index.html */

let paperButton = document.querySelector('#paper-button');
let scissorsButton = document.querySelector('#scissors-button');
let button = document.querySelectorAll('.user-choice');
let userChoice;
let computerChoice;
let optionArray = ['rock', 'paper', 'scissors'];
let resultMessage = document.querySelector('#result-message');
let userScore = 0;
let computerScore = 0;
let compScoreDOM = document.querySelector('#cpu-score');
let userScoreDOM = document.querySelector('#user-score');
let playToSelection = document.querySelector('#play-to');
let playTo = Number(playToSelection.value);
let resetButton = document.querySelector('#reset-button')


playToSelection.onchange = function() { clear() };

function clear() {
  userScore = 0;
  computerScore = 0;
  compScoreDOM.innerHTML = computerScore;
  userScoreDOM.innerHTML = userScore;
}

rockButton.addEventListener('click', function() {
  userChoice = 'rock';
  playGame();
});
paperButton.addEventListener('click', function() {
  userChoice = 'paper';
  playGame();
});
scissorsButton.addEventListener('click', function() {
  userChoice = 'scissors';
  playGame();
});

resetButton.addEventListener('click', function() {
  clear();
})

function getCompChoice() {
  let cpuIndex = Math.floor(Math.random() * optionArray.length);
  computerChoice = optionArray[cpuIndex];
}

function playGame() {
  playTo = Number(document.querySelector('#play-to').value);
  getCompChoice();
  if (userChoice === computerChoice) {
    resultMessage.innerHTML = `You chose ${userChoice}. <br />The computer chose ${computerChoice}.<br/> It's a tie.`;
  } else if ((userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock')) {
    resultMessage.innerHTML = `You chose ${userChoice}.<br />The computer chose ${computerChoice}.<br />The computer wins.`;
    computerScore++;
    compScoreDOM.innerHTML = computerScore;
    if (computerScore === playTo) {
      setTimeout(function() {
        alert('The computer wins the game');
        clear();
      }, 0);
    }
  } else {
    userScore++;
    resultMessage.innerHTML = `You chose ${userChoice}.<br />The computer chose ${computerChoice}.<br />You win!`;
    userScoreDOM.innerHTML = userScore;
    if (userScore === playTo) {
      setTimeout(function() {
        alert('You win!');
        clear();
      }, 0);
    }
  }
}
