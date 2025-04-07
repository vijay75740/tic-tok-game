class TicTokGame {
    constructor() {
      this.board = Array(9).fill(null);
      this.currentPlayer = "X";
      this.winner = null;
    }
  
    playMove(index) {
      if (this.winner) return `Game over! Winner: ${this.winner}`;
      if (this.board[index]) return "Invalid move!";
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
        return `Player ${this.currentPlayer} wins!`;
      }
      if (!this.board.includes(null)) {
        this.winner = "Draw";
        return "It's a draw!";
      }
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      return `Player ${this.currentPlayer}'s turn.`;
    }
  
    checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
      return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return this.board[a] &&
               this.board[a] === this.board[b] &&
               this.board[a] === this.board[c];
      });
    }
  
    reset() {
      this.board = Array(9).fill(null);
      this.currentPlayer = "X";
      this.winner = null;
    }
  
    getBoard() {
      return [...this.board];
    }
  
    getCurrentPlayer() {
      return this.currentPlayer;
    }
  
    getWinner() {
      return this.winner;
    }
  }
  
  module.exports = TicTokGame;
  