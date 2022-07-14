let randomRPS;

function computerPlay() {
    const RPS = ['rock', 'paper', 'scissors'];
    randomRPS = (Math.floor(Math.random() * RPS.length));
    return RPS[randomRPS];
}

