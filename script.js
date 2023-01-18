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

const choice = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomComputerSelection = choice[Math.floor(Math.random() * choice.length)];
    return randomComputerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "Rock"

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}