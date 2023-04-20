// A Rock Paper Scissors game played against the computer in the console.

const myArray = ["rock", "paper", "scissors"]
let playerScore = (0);
let computerScore = (0);

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
    playerSelection = getPlayerChoice();
    computureSelection = getComputerChoice();
    if (playerSelection === computureSelection) {
        return "Player Chose:" + playerSelection + " /Computer Chose:" + computureSelection + " /Result: Tie" 
        + " Score: Player-" + playerScore + "  Computer-" + computerScore;
    }
    else if (playerSelection === "rock" && computureSelection === "paper"
    || playerSelection === "paper" && computureSelection === "scissors" 
    || playerSelection === "scissors" && computureSelection === "rock") {
        computerScore++;
        return "Player Chose:" + playerSelection + " /Computer Chose:" + computureSelection + " /Result: Player loses!" 
        + " Score: Player-" + playerScore + "  Computer-" + computerScore;
    }
    else if (playerSelection === "rock" && computureSelection === "scissors"
    || playerSelection === "paper" && computureSelection === "rock" 
    || playerSelection === "scissors" && computureSelection === "paper") {
        playerScore++
        return "Player Chose:" + playerSelection + " /Computer Chose:" + computureSelection + " /Result: Player Wins!" 
        + " Score: Player-" + playerScore + "  Computer-" + computerScore;
    }
    else {
        return "Thats not an option! Please check spelling."
    }
}

// Plays a game 5 times in a row and keeps score.

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (+playerScore > +computerScore) {
        return playerScore + " " + computerScore + " Player Wins!"
    }
    else if (+playerScore === +computerScore) {
        return playerScore + " " + computerScore + " Tie!"
    }
    else {
        return playerScore + " " + computerScore + " Computer Wins!"
    }
}