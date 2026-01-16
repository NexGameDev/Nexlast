import { canPlace, placeBlock, renderBoard, clearLines } from "./board.js";
import { addScore } from "./score.js";

let dragging = null;

export function enableDrag(blocks, onPlaced) {
  blocks.forEach(block => {
    block.el.addEventListener("pointerdown", e => {
      dragging = block;
      block.el.classList.add("dragging");
    });
  });

  document.addEventListener("pointermove", e => {
    if (!dragging) return;

    const boardEl = document.getElementById("board");
    const rect = boardEl.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / 32);
    const y = Math.floor((e.clientY - rect.top) / 32);

    highlight(dragging.shape, x, y);
  });

  document.addEventListener("pointerup", e => {
    if (!dragging) return;

    const boardEl = document.getElementById("board");
    const rect = boardEl.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / 32);
    const y = Math.floor((e.clientY - rect.top) / 32);

    if (canPlace(dragging.shape, x, y)) {
      placeBlock(dragging.shape, x, y, dragging.color);
      renderBoard();
      const lines = clearLines();
      if (lines) addScore(lines * 100);
      onPlaced(dragging);
    }

    clearHighlight();
    dragging.el.classList.remove("dragging");
    dragging = null;
  });
}

function highlight(shape, x, y) {
  clearHighlight();
  shape.forEach(([dx, dy]) => {
    const index = (y + dy) * 8 + (x + dx);
    const cell = document.querySelector(`.cell[data-index="${index}"]`);
    if (cell) cell.classList.add("ghost");
  });
}

function clearHighlight() {
  document.querySelectorAll(".ghost").forEach(c => c.classList.remove("ghost"));
}
