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

let div = document.querySelector("#results")
let div2 = document.querySelector("#score")
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
            div.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
            div2.textContent = `Current score: Player ${scorePlayer} - Computer ${scoreComputer}`
        } else if (playerSelection === computerSelection) {
            div.textContent = `It's a tie!`
            div2.textContent = `Current score: Player ${scorePlayer} - Computer ${scoreComputer}`
        } else {
            scoreComputer++
            div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
            div2.textContent = `Current score: Player ${scorePlayer} - Computer ${scoreComputer}`
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
    div2.textContent = "New game, start playing!";
});
