// JavaScript

// Constants for weapons
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Scores
let playerScore = 0;
let computerScore = 0;

// Play a round
function playRound(playerChoice) {
  const computerChoice = getRandomWeapon();
  const result = getResult(playerChoice, computerChoice);

  displayChoices(playerChoice, computerChoice);
  updateScore(result);

  if (playerScore === 5 || computerScore === 5) {
    showWinner();
  }
}

// Get a random computer weapon
function getRandomWeapon() {
  const weapons = [ROCK, PAPER, SCISSORS];
  const randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
}

// Get the result of the round
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Display player and computer choices
function displayChoices(playerChoice, computerChoice) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Player chose ${playerChoice}, Computer chose ${computerChoice}`;
}

// Update the score and display it
function updateScore(result) {
  const scoreElement = document.getElementById("score");

  if (result === "win") {
    playerScore++;
    scoreElement.innerHTML = `Player: ${playerScore} ---- Computer: ${computerScore}`;
  } else if (result === "lose") {
    computerScore++;
    scoreElement.innerHTML = `Player: ${playerScore} ---- Computer: ${computerScore}`;
  } else {
    scoreElement.innerHTML = `Player: ${playerScore} ---- Computer: ${computerScore}`;
  }
}

// Show the winner of the game
function showWinner() {
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
  
    let winnerMessage = "";
    if (playerScore > computerScore) {
      winnerMessage = "Congratulations! You win!";
    } else if (computerScore > playerScore) {
      winnerMessage = "Computer wins! Better luck next time!";
    } else {
      winnerMessage = "It's a tie!";
    }
  
    resultElement.textContent = winnerMessage;
    scoreElement.textContent = "";
  
    // Reset the scores
    playerScore = 0;
    computerScore = 0;
  }
  