

// Main Computer Play Function

function computerPlay() {
    //Random selector with 1 as min, 3 as max
    let computerChoice = Math.floor(Math.random() * (3 - 0) + 1)
    switch(computerChoice) {
        case 1:
            computerChoice = 'Rock'
            break;
        case 2:
            computerChoice = 'Paper'
            break;
        case 3:
            computerChoice = 'Scissors'
            break;
    }
    return computerChoice;
}

function playRound(playerChoice, computerPlay) {
    if (playerChoice == computerPlay) {
        console.log('Draw!')
    } else if (playerChoice == 'Rock' && computerPlay == 'Paper') {
        console.log('You Lose!')  
    } else if (playerChoice == 'Rock' && computerPlay == 'Scissors') {
        console.log('You Win!')
    } else if (playerChoice == 'Paper' && computerPlay == 'Scissors'){
        console.log('You Lose!')
    } else if (playerChoice == 'Paper' && computerPlay == 'Rock') {
        console.log("You Win!")
    } else if (playerChoice == 'Scissors' && computerPlay == 'Rock') {
        console.log("You Lose!")
    } else if (playerChoice == 'Scissors' && computerPlay == 'Paper') {
        console.log("You Win!")
    }
}