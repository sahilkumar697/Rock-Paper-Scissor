const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
} ;

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickYourMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        }else if (computerMove === 'Paper') {
            result = 'You Lose.';
        }else if (computerMove === 'Scissor') {
            result = 'You Win.';
        }
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win.';
        }else if (computerMove === 'Paper') {
            result = 'Tie.';
        }else if (computerMove === 'Scissor') {
            result = 'You Lose.';
        }
    }
    
    else if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'You Lose.';
        }else if (computerMove === 'Paper') {
            result = 'You Win.';
        }else if (computerMove === 'Scissor') {
            result = 'Tie.';
        }
    }

    if (result === 'You Win.') {
        score.wins += 1;
    } else if (result === 'You Lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.you-win-lose-tie').innerHTML =`Result= ${result}`;

document.querySelector('.your-moves').innerHTML = `You Picked ${playerMove}. Computer Picked ${computerMove}.`;
    
}


function updateScoreElement() {
    document.querySelector('.updateScore').innerHTML =
        `wins: ${score.wins}, lossses: ${score.losses}, ties: ${score.ties}`;
}

function pickYourMove() {
    const computerChoice = Math.random();

    let computerMove =  '';

    if (computerChoice >= 0 && computerChoice < 1 / 3) {
        computerMove = 'Rock';
    }else if (computerChoice >= 1 / 3 && computerChoice < 2 / 3) {
        computerMove = 'Paper';
    }else if (computerChoice >= 2 / 3 && computerChoice <= 1 ) {
        computerMove = 'Scissor';
    }

    return computerMove;
}