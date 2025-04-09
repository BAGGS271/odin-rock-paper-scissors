const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");

const results = document.querySelector(".results");
const score = document.querySelector(".score");

rockButton.addEventListener("click", pressRock);

function pressRock() {
    const playerSelection = "rock";
    playRound(playerSelection)

    results.textContent = "Player Chose Rock and computer chose " + computureSelection;
    score.textContent = "Score: Player-" + playerScore + "  Computer-" + computerScore;

    document.getElementById("rockImg").style.display = "block";
    document.getElementById("paperImg").style.display = "none";
    document.getElementById("scissorsImg").style.display = "none";

    getComImg()
    checkScore()
    resetGame()
}

paperButton.addEventListener("click", pressPaper);

function pressPaper() {
    const playerSelection = "paper";
    playRound(playerSelection)

    results.textContent = "Player Chose Paper and computer chose " + computureSelection;
    score.textContent = "Score: Player-" + playerScore + "  Computer-" + computerScore;

    document.getElementById("rockImg").style.display = "none";
    document.getElementById("paperImg").style.display = "block";
    document.getElementById("scissorsImg").style.display = "none";

    getComImg()
    checkScore()
    resetGame()
}

scissorsButton.addEventListener("click", pressScissors);

function pressScissors() {
    const playerSelection = "scissors";
    playRound(playerSelection)

    results.textContent = "Player Chose Scissors and computer chose " + computureSelection;
    score.textContent = "Score: Player-" + playerScore + "  Computer-" + computerScore; 

    document.getElementById("rockImg").style.display = "none";
    document.getElementById("paperImg").style.display = "none";
    document.getElementById("scissorsImg").style.display = "block";

    getComImg()
    checkScore()
    resetGame()
}

const choices = ["rock", "paper", "scissors"]
let playerScore = (0);
let computerScore = (0);


function playRound(playerSelection) {
    computureSelection = getComputerChoice();
    if (playerSelection === computureSelection) {
        return
    }
    else if (playerSelection === "rock" && computureSelection === "paper"
    || playerSelection === "paper" && computureSelection === "scissors" 
    || playerSelection === "scissors" && computureSelection === "rock") {
        computerScore++;
    }
    else if (playerSelection === "rock" && computureSelection === "scissors"
    || playerSelection === "paper" && computureSelection === "rock" 
    || playerSelection === "scissors" && computureSelection === "paper") {
        playerScore++;
    }
 }

// Selects Rock, Paper or Scissors for the computer.
function getComputerChoice() {
    return choices[Math.floor(Math.random() *choices.length)];
}

//changes the computre choice image
function getComImg() {
    if (computureSelection === "rock") {
        document.getElementById("comRock").style.display = "block";
        document.getElementById("comPaper").style.display = "none";
        document.getElementById("comScissors").style.display = "none";
    }
    else if (computureSelection === "paper") {
        document.getElementById("comRock").style.display = "none";
        document.getElementById("comPaper").style.display = "block";
        document.getElementById("comScissors").style.display = "none";
    }
    else {
        document.getElementById("comRock").style.display = "none";
        document.getElementById("comPaper").style.display = "none";
        document.getElementById("comScissors").style.display = "block";
    }
}

//checks the score to see if there is a winner
function checkScore() {
    if (playerScore === 5) {
        results.textContent = "Player Wins!"
    }
    else if (computerScore === 5) {
        results.textContent = "Computer Wins!"
    }
    else {
        return;
    }
}

//resets the game
function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
    }
}