
const buttons = document.querySelectorAll("button");
const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");

const results = document.querySelector(".results");
const score = document.querySelector(".score");

rockButton.addEventListener("click", pressRock);

function pressRock() {
    const playerSelection = "rock";
    playRound(playerSelection)

    results.textContent = "Player Chose Rock and computure chose " + computureSelection;
    score.textContent = "Score: Player-" + playerScore + "  Computer-" + computerScore;

    }

paperButton.addEventListener("click", pressPaper);

function pressPaper() {
    const playerSelection = "paper";
    playRound(playerSelection)

    results.textContent = "Player Chose Paper and computure chose " + computureSelection;
    score.textContent = "Score: Player-" + playerScore + "  Computer-" + computerScore; 
}

scissorsButton.addEventListener("click", pressScissors);

function pressScissors() {
    const playerSelection = "scissors";
    playRound(playerSelection)

    results.textContent = "Player Chose Scissors and computure chose " + computureSelection;
    score.textContent = "Score: Player-" + playerScore + "  Computer-" + computerScore; 
}

// Selects Rock, Paper or Scissors for the computer.
function getComputerChoice() {
    return choices[Math.floor(Math.random() *choices.length)];
}


// A Rock Paper Scissors game played against the computer in the console.
const choices = ["rock", "paper", "scissors"]
let playerScore = (0);
let computerScore = (0);

function playRound(playerSelection) {
    computureSelection = getComputerChoice();
    if (playerSelection === computureSelection) {
        return "Player Chose:" + playerSelection + " Computer Chose:" + computureSelection + " Result:Tie." 
        + " Score: Player-" + playerScore + "  Computer-" + computerScore;
    }
    else if (playerSelection === "rock" && computureSelection === "paper"
    || playerSelection === "paper" && computureSelection === "scissors" 
    || playerSelection === "scissors" && computureSelection === "rock") {
        computerScore++;
        return "Player Chose:" + playerSelection + " Computer Chose:" + computureSelection + " Result:Player loses!" 
        + " Score: Player-" + playerScore + "  Computer-" + computerScore;
    }
    else (playerSelection === "rock" && computureSelection === "scissors"
    || playerSelection === "paper" && computureSelection === "rock" 
    || playerSelection === "scissors" && computureSelection === "paper") ;
        playerScore++
        return "Player Chose:" + playerSelection + " Computer Chose:" + computureSelection + " Result:Player Wins!" 
        + " Score: Player-" + playerScore + "  Computer-" + computerScore;
    }