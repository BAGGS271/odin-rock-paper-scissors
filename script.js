//A Rock Paper Scissors game played against the computer in the console.

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        console.log("Rock");
    }
    else if (x === 2) {
        console.log("paper");
    }
    else {
        console.log("Scissors");
    }
}