

// Main Computer Play Function

function computerPlay() {
    //Random selector with 1 as min, 3 as max
    let computerChoice = Math.floor(Math.random() * (3 - 0) + 1)
    switch(computerChoice) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
    }
    return computerChoice;
}

let gameCounter = 0;
let gameWon = 0;
let gameLost = 0;

function playRound(playerChoice, computerPlay) {
    

    //Checks for win or lose conditions
    if (playerChoice == computerPlay) {
        console.log('Draw!');
        gameCounter++;
    } else if (playerChoice == 'rock' && computerPlay == 'paper') {
        console.log('You lost this round!') 
        gameCounter++ 
        gameLost++;
    } else if (playerChoice == 'rock' && computerPlay == 'scissors') {
        console.log('You won this round!')
        gameCounter++
        gameWon++;
    } else if (playerChoice == 'paper' && computerPlay == 'scissors'){
        console.log('You lost this round!')
        gameCounter++
        gameLost++;
    } else if (playerChoice == 'Paper' && computerPlay == 'rock') {
        console.log("You won this round!")
        gameCounter++
        gameWon++;
    } else if (playerChoice == 'scissors' && computerPlay == 'rock') {
        console.log("You lost this round!")
        gameCounter++
        gameLost++;
    } else if (playerChoice == 'scissors' && computerPlay == 'paper') {
        console.log("You won this round!")
        gameCounter++
        gameWon++;
    } else {
        userInput()
    }

    if (gameCounter < 5) {
        userInput();
    }

    //Check for win or lose after 5 games and reset counters
    if (gameCounter >= 5) {
        if (gameWon > gameLost) {
            console.log("You won the game!")
        } else if (gameWon < gameLost) {
            console.log("You lost! Try again.")
        }
        gameCounter = 0;
        gameWon = 0;
        gameLost = 0;
    }
    
    
}

function userInput() {
    let promptInput = prompt("Choose Rock, Paper, or Scissors");
    let userInput = promptInput.toLowerCase();
    console.log(userInput)

    playRound(userInput, computerPlay())
}


userInput()
