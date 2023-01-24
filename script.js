// Rock Paper Scissors
// Played from console
// Create an array for the computer to choose from
// Get computer choice of Rock, Paper or Scissors
    // Create getComputerChoice function
    // This function will randomly choose between Rock, Paper and Scissors
// Create a function playRound
    // This function will take two parameters: playerSelection and computerSelection
        // playerSelection is the input of the user
            // To avoid errors it needs to be case-insensitive
        // computerSelection is the output of getComputerChoice function
    // Compares the Selections
    // Return the string corresponding to the outcome
//

let div = document.querySelector("#results");
let playerScore = document.querySelector("#playerscore");
let computerScore = document.querySelector('#computerscore');
let explanation = document.querySelector('#explanation');

const choice = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomComputerSelection = choice[Math.floor(Math.random() * choice.length)];
    return randomComputerSelection;
}

let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection, computerSelection) {
    if (scorePlayer !== 5 && scoreComputer !== 5) {
        if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
            scorePlayer++
            div.textContent = `You Win!`;
            explanation.textContent = `${playerSelection} beats ${computerSelection}`;
            playerScore.textContent = `${scorePlayer}`;
            computerScore.textContent = `${scoreComputer}`;

        } else if (playerSelection === computerSelection) {
            div.textContent = `It's a tie!`
            playerScore.textContent = `${scorePlayer}`;
            computerScore.textContent = `${scoreComputer}`;

        } else {
            scoreComputer++
            div.textContent = `You lose!`;
            explanation.textContent = `${computerSelection} beats ${playerSelection}`;
            playerScore.textContent = `${scorePlayer}`;
            computerScore.textContent = `${scoreComputer}`;
        }
    } else if (scorePlayer === 5 || scoreComputer === 5) {
        if (scorePlayer === 5) {
            return div.textContent = "Player Wins!";
        } else {
            return div.textContent = "Computer Wins!"
        }
    }
}

document.getElementById('rock').addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById('paper').addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById('scissors').addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById('reset').addEventListener("click", function(){
    scorePlayer = 0;
    scoreComputer = 0;
    div.textContent = "";
    explanation.textContent = "New game, start playing!";
    playerScore.textContent = `${scorePlayer}`;
    computerScore.textContent = `${scoreComputer}`
});
