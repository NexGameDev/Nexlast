// =====================================
// FILE: randomizer.js
// PART 3.3 — SMART BLOCK RANDOMIZER
// =====================================

// daftar bentuk blok (mirip Block Blast)
const blockShapes = [
  [[1]],
  [[1,1]],
  [[1],[1]],
  [[1,1,1]],
  [[1],[1],[1]],
  [[1,1],[1,1]],
  [[1,1,1],[0,1,0]]
];

// cek apakah blok bisa dipasang
function canPlaceAnywhere(shape) {
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (canPlace(shape, x, y)) return true;
    }
  }
  return false;
}

// RANDOMIZER CERDAS
function smartRandomBlock() {
  const validBlocks = blockShapes.filter(shape => canPlaceAnywhere(shape));

  if (validBlocks.length === 0) {
    gameOver();
    return null;
  }

  return validBlocks[Math.floor(Math.random() * validBlocks.length)];
  }
