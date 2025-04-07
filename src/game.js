document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  const status = document.getElementById('status');
  const resetBtn = document.getElementById('reset');
  
  let currentPlayer = 'X';
  let gameState = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;
  
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  
  const handleCellClick = (e) => {
    const cell = e.target;
    const index = parseInt(cell.getAttribute('data-index'));
    
    if (gameState[index] !== '' || !gameActive) return;
    
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    
    checkGameResult();
  };
  
  const checkGameResult = () => {
    let roundWon = false;
    
    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') continue;
      if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
        roundWon = true;
        break;
      }
    }
    
    if (roundWon) {
      status.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
      return;
    }
    
    if (!gameState.includes('')) {
      status.textContent = "Game ended in a draw!";
      gameActive = false;
      return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;
  };
  
  const resetGame = () => {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    status.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('x', 'o');
    });
  };
  
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  resetBtn.addEventListener('click', resetGame);
});