// =====================================
// FILE: game.js
// PART 3.6 — GAME CORE & STATE
// =====================================

let board = Array.from({ length: 8 }, () => Array(8).fill(0));
let playerCoins = 100;
let score = 0;
let currentBlocks = [];

function generateNewBlocks() {
  currentBlocks = [
    smartRandomBlock(),
    smartRandomBlock(),
    smartRandomBlock()
  ];
}

function addScore(val) {
  score += val;
}

function gameOver() {
  alert("GAME OVER");
}
