// Write your code here.

const board = document.getElementById('board');
const gameHeading = document.getElementById('game-heading');
const restartGameButton = document.getElementById('restart-button');

const gameSquares = document.querySelectorAll('.game-square');

const PLAYERS = {
  player1: 'Player 1',
  player2: 'Player 2'
}

let numOfMoves = 0;

let playersTurn = PLAYERS.player1;

const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

restartGameButton.addEventListener('click', () => {
    gameSquares.forEach((gameSquare) => {
        gameSquare.innerText = '';
        gameSquare.removeAttribute('disabled');

    })
    gameHeading.textContent = 'Player 1\'s Turn';
    restartGameButton.style.display = 'none';
    numOfMoves = 0;
})

function checkWin () {
  for(winningPos of WINNING_COMBINATIONS){
    const square1 = gameSquares[winningPos[0]].textContent;
    const square2 = gameSquares[winningPos[1]].textContent;
    const square3 = gameSquares[winningPos[2]].textContent;

    if( square1.length === 1 &&
        square2.length === 1 &&
        square3.length === 1 &&
        square1 ===
        square2 &&
        square2 ===
        square3 &&
        square1 ===
        square3
        ) {
        gameHeading.textContent = `${playersTurn} Won!`
        restartGameButton.style.display = 'block';
        disableAll();
    }
  }
}

function disableAll() {
  gameSquares.forEach((gameSquare) => {
    gameSquare.setAttribute('disabled', true);
  })
}

function tie() {
    gameHeading.textContent = `Tie Game!`;
    restartGameButton.style.display = 'block';
    disableAll();
}

gameSquares.forEach((gameSquare) => {
  gameSquare.addEventListener('click', () => {

    numOfMoves++;

    if(numOfMoves === 9) {
        tie();
        return;
    }

    if(playersTurn === PLAYERS.player1){
      gameSquare.textContent = 'X'
      gameHeading.textContent = `Player 2's Turn`
      checkWin();
      playersTurn = PLAYERS.player2;
    } else {
      gameSquare.textContent = 'O'
      gameHeading.textContent = `Player 1's Turn`
      checkWin();
      playersTurn = PLAYERS.player1;
    }

    gameSquare.setAttribute('disabled', true);
    
    })
})