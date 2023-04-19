//A Rock Paper Scissors game played against the computer in the console.

// Selects Rock, Paper or Scissors for the computer.

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return("Rock");
    }
    else if (x === 2) {
        return("paper");
    }
    else {
        return("Scissors");
    }
}

function getPlayerChoice () {
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    console.log(input);
}