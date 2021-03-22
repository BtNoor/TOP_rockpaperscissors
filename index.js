// Javascript selectors for buttons and info displaying on the page

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.getElementById('score');
const result = document.getElementById('result');


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
        result.textContent = 'Draw!';
        gameCounter++;
        score.textContent = `Games Played: ${gameCounter} Games Won: ${gameWon} \n Games Lost: ${gameLost}`
    } else if (playerChoice == 'rock' && computerPlay == 'paper') {
        result.textContent = 'You lost this round!'; 
        gameCounter++ 
        gameLost++;
        score.textContent = `Games Played: ${gameCounter} Games Won: ${gameWon} \n Games Lost: ${gameLost}`
    } else if (playerChoice == 'rock' && computerPlay == 'scissors') {
        result.textContent = 'You won this round!'
        gameCounter++
        gameWon++;
        score.textContent = `Games Played: ${gameCounter} Games Won: ${gameWon} \n Games Lost: ${gameLost}`
    } else if (playerChoice == 'paper' && computerPlay == 'scissors'){
        result.textContent = 'You lost this round!'
        gameCounter++
        gameLost++;
        score.textContent = `Games Played: ${gameCounter} Games Won: ${gameWon} \n Games Lost: ${gameLost}`

    } else if (playerChoice == 'paper' && computerPlay == 'rock') {
        result.textContent = "You won this round!"
        gameCounter++
        gameWon++;
        score.textContent = `Games Played: ${gameCounter} Games Won: ${gameWon} \n Games Lost: ${gameLost}`
    } else if (playerChoice == 'scissors' && computerPlay == 'rock') {
        result.textContent = "You lost this round!"
        gameCounter++
        gameLost++;
        score.textContent = `Games Played: ${gameCounter} Games Won: ${gameWon} \n Games Lost: ${gameLost}`
    } else if (playerChoice == 'scissors' && computerPlay == 'paper') {
        result.textContent = "You won this round!"
        gameCounter++
        gameWon++;
        score.textContent = `Games Played: ${gameCounter} Games Won: ${gameWon} \n Games Lost: ${gameLost}`
    } else {
        console.log(`playerChoice = ${playerChoice} and computerChoice = ${computerPlay}`)
    }

    // if (gameCounter < 5) {
    //     userInput();
    // }

    //Check for win or lose after 5 games and reset counters
    if (gameCounter >= 5) {
        if (gameWon > gameLost) {
            result.textContent = "You won the game!";
        } else if (gameWon < gameLost) {
            result.textContent = "You lost the game! Try again."
        }
        gameCounter = 0;
        gameWon = 0;
        gameLost = 0;
    }
    
    
}

// function userInput() {
//     let promptInput = prompt("Choose Rock, Paper, or Scissors");
//     let userInput = promptInput.toLowerCase();
//     console.log(userInput)

//     playRound(userInput, computerPlay())
// }


//userInput()

rock.addEventListener('click', () => {
    playRound('rock', computerPlay())
  });

paper.addEventListener('click', () => {
    playRound('paper', computerPlay())
  });

scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay())
  });
