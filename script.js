const squares = document.querySelectorAll('.square');
let player = 'X';

function handleClick(event) {
  const square = event.target;
  if (square.textContent !== '') {
    return;
  }
  square.textContent = player;
  if (checkWin()) {
    alert(`${player} wins!`);
    resetBoard();
  } else if (checkTie()) {
    alert('Tie!');
    resetBoard();
  } else {
    player = player === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].textContent !== '' &&
      squares[a].textContent === squares[b].textContent &&
      squares[b].textContent === squares[c].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === '') {
      return false;
    }
  }
  return true;
}

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
  player = 'X';
}

squares.forEach((square) => {
  square.addEventListener('click', handleClick);
});
