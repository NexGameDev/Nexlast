// =====================================
// FILE: board.js
// PART 3.5 — CLEAR ROW & COLUMN + ANIM
// =====================================

function clearRow(row) {
  for (let x = 0; x < 8; x++) board[row][x] = 0;
  addScore(100);
}

function clearColumn(col) {
  for (let y = 0; y < 8; y++) board[y][col] = 0;
  addScore(100);
}

function checkClear() {
  for (let i = 0; i < 8; i++) {
    if (board[i].every(cell => cell === 1)) clearRow(i);
    if (board.every(row => row[i] === 1)) clearColumn(i);
  }
}
