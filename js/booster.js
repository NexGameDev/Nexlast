// =====================================
// FILE: booster.js
// PART 3.2 — BOOSTER STATE & USE LOGIC
// =====================================

const boosters = {
  bomb: 0,
  rowClear: 0,
  colClear: 0,
  reroll: 0
};

function useBooster(type, x, y) {
  if (boosters[type] <= 0) return;

  if (type === "bomb") {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        clearCell(x + i, y + j);
      }
    }
  }

  if (type === "rowClear") clearRow(y);
  if (type === "colClear") clearColumn(x);
  if (type === "reroll") generateNewBlocks();

  boosters[type]--;
  updateBoard();
}
