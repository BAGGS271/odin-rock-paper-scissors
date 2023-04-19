//A Rock Paper Scissors game played against the computer in the console.

const myArray = ["Rock", "Paper", "Scissors"]

// Selects Rock, Paper or Scissors for the computer.

function getComputerChoice() {
    return myArray[Math.floor(Math.random() *myArray.length)];
}

function getPlayerChoice () {
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    console.log(input);
}