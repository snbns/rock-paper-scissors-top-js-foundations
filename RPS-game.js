let randomRPS;
let playerSelection;
let computerSelection;

function computerPlay() {
    const RPS = ['rock', 'paper', 'scissors'];
    randomRPS = (Math.floor(Math.random() * RPS.length));
    return RPS[randomRPS];
}

function playRound(playerSelection, computerSelection) {
    let winner;

    if (playerSelection === computerSelection) {
        winner = "The game is a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "Computer wins! Paper beats rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "User wins! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "User wins! Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "Computer wins! Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "User wins! Scissors beats paper!";
    } else {
        winner = "Computer wins! Rock beats scissors!";
    }

    return winner;
}