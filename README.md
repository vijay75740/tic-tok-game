<div align="center">
<h1>tic tok toe game</h1>

![Known Vulnerabilities](https://snyk.io/test/github/vijay75740/currency-converter-nodejs/badge.svg?targetFile=package.json)  ![supported node versions](https://img.shields.io/badge/node%20v-12.x%20%7C%2013.x%20%7C%2014.x%20%7C%2015.x%20%7C%2016.x%20%7C%2017.x%20%7C%2018.x-blue) 
 ![license: MIT](https://img.shields.io/npm/l/vue.svg) [![npm version](https://badge.fury.io/js/currency-converter-vl.svg)](https://badge.fury.io/js/currency-converter-vl) ![npm](https://img.shields.io/npm/dm/currency-converter-vl)
<p>The Currency Converter App is a powerful and user-friendly tool designed to simplify the process of converting one currency to another. Whether you're a traveler, a business professional, or someone dealing in international transactions, this app provides accurate and real-time currency conversion to meet your needs.</p>
</div>

# 🎮 Tic Tok Game - A Simple Tic Tac Toe Game in JavaScript

**Tic Tok Game** is a lightweight, logic-only implementation of the classic **Tic Tac Toe** game written in pure **JavaScript**. This easy-to-use NPM package lets you integrate turn-based Tic Tac Toe gameplay into your apps, bots, or back-end systems—no UI dependencies!

---

## 🚀 Features

- ✅ Pure JavaScript logic
- ✅ No external dependencies
- ✅ Supports two-player turn-based gameplay
- ✅ Winner detection and draw condition
- ✅ Easy reset and replay
- ✅ Ready to use with Node.js or browser (via bundlers)

---

## 📦 Installation

This package can be installed using `npm`

```bash
npm install tic-tok-game
```

or, `yarn`

```bash
yarn add tic-tok-game
```

### Usage

```bash
const TicTokGame = require("tic-tok-game");

const game = new TicTokGame();

console.log(game.playMove(0)); // Player X
console.log(game.playMove(1)); // Player O
console.log(game.getBoard());  // Current board state
console.log(game.getWinner()); // Check winner or draw
```

### 📘 API Reference

new TicTokGame()
Creates a new game instance.

playMove(index)
Plays a move at position 0-8. Returns a message based on game state.

getBoard()
Returns an array of 9 elements representing the game board.

getCurrentPlayer()
Returns 'X' or 'O' – the player whose turn it is.

getWinner()
Returns 'X', 'O', 'Draw', or null.

reset()
Resets the board and game state.

### 📌 Example Output

```bash

// Example gameplay
const game = new TicTokGame();

game.playMove(0); // "Player O's turn."
game.playMove(1); // "Player X's turn."
game.playMove(4); // ...
game.playMove(2);
game.playMove(8);

console.log(game.getWinner()); // "Player X wins!" or "It's a draw!"
```

### 📊 Use Cases

Educational tools for learning JavaScript

Backend logic for browser-based games

Turn-based bots and game engines

CLI Tic Tac Toe games

Game development tutorials