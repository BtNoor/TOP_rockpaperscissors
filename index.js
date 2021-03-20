

// Main Computer Play Function

function computerPlay() {
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
    console.log(computerChoice);
}