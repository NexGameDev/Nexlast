import { initBoard } from "./board.js";
import { generateBlocks } from "./blocks.js";
import { enableDrag } from "./placement.js";

const blocksEl = document.getElementById("blocks");

function spawnBlocks() {
  blocksEl.innerHTML = "";
  const blocks = generateBlocks();

  const blockObjs = blocks.map(b => {
    const el = document.createElement("div");
    el.className = "block";
    el.style.background = b.color;
    el.textContent = "";
    blocksEl.appendChild(el);
    return { ...b, el };
  });

  enableDrag(blockObjs, placed => {
    placed.el.remove();
    if (!blocksEl.children.length) spawnBlocks();
  });
}

initBoard();
spawnBlocks();
