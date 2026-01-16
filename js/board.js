export const BOARD_SIZE = 8;
export let board = [];

export function initBoard() {
  board = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(0)
  );

  const boardEl = document.getElementById("board");
  boardEl.innerHTML = "";

  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.index = i;
    boardEl.appendChild(cell);
  }
}

export function canPlace(shape, x, y) {
  for (const [dx, dy] of shape) {
    const nx = x + dx;
    const ny = y + dy;
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= BOARD_SIZE ||
      ny >= BOARD_SIZE ||
      board[ny][nx]
    ) {
      return false;
    }
  }
  return true;
}

export function placeBlock(shape, x, y, color) {
  shape.forEach(([dx, dy]) => {
    board[y + dy][x + dx] = color;
  });
}

export function renderBoard() {
  const cells = document.querySelectorAll(".cell");
  board.flat().forEach((v, i) => {
    cells[i].style.background = v || "";
    cells[i].classList.toggle("filled", !!v);
  });
}

export function clearLines() {
  let cleared = 0;

  // rows
  for (let y = 0; y < BOARD_SIZE; y++) {
    if (board[y].every(v => v)) {
      board[y].fill(0);
      cleared++;
    }
  }

  // columns
  for (let x = 0; x < BOARD_SIZE; x++) {
    if (board.every(row => row[x])) {
      for (let y = 0; y < BOARD_SIZE; y++) board[y][x] = 0;
      cleared++;
    }
  }

  return cleared;
}
