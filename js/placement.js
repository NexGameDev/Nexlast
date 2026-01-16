// =====================================
// FILE: placement.js
// PART 3.4 — BLOCK PLACEMENT + SHADOW
// =====================================

function canPlace(shape, startX, startY) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const bx = startX + x;
        const by = startY + y;
        if (bx < 0 || bx >= 8 || by < 0 || by >= 8) return false;
        if (board[by][bx]) return false;
      }
    }
  }
  return true;
}

function placeBlock(shape, startX, startY) {
  if (!canPlace(shape, startX, startY)) return false;

  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) board[startY + y][startX + x] = 1;
    }
  }

  checkClear();
  generateNewBlocks();
  return true;
}
