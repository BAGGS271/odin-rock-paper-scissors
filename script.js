// A Rock Paper Scissors game played against the computer in the console.

const myArray = ["rock", "paper", "scissors"]

// Selects Rock, Paper or Scissors for the computer.

function getComputerChoice() {
    return myArray[Math.floor(Math.random() *myArray.length)];
}

// Produces a Prompt for the player to select.

function getPlayerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    return input;
}

// Plays a Round and disoplays the winner in the console.

function playRound() {
    const playerSelection = getPlayerChoice();
    const computureSelection = getComputerChoice();
    if (playerSelection === computureSelection) {
        return "Player Chose:" + playerSelection + " /Computer Chose:" + computureSelection + " /Result: Tie";
    }
    else if (playerSelection === "rock" && computureSelection === "paper"
    || playerSelection === "paper" && computureSelection === "scissors" 
    || playerSelection === "scissors" && computureSelection === "rock") {
        return "Player Chose:" + playerSelection + " /Computer Chose:" + computureSelection + " /Result: Player loses!";
    }
    else if (playerSelection === "rock" && computureSelection === "scissors"
    || playerSelection === "paper" && computureSelection === "rock" 
    || playerSelection === "scissors" && computureSelection === "paper") {
        return "Player Chose:" + playerSelection + " /Computer Chose:" + computureSelection + " /Result: Player Wins!";
    }
    else {
        return "Thats not an option! Please check spelling."
    }
}