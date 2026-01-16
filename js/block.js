import { shuffle } from "./utils.js";

export const SHAPES = [
  [[0,0]],
  [[0,0],[1,0]],
  [[0,0],[0,1]],
  [[0,0],[1,0],[0,1]],
  [[0,0],[1,0],[2,0]],
  [[0,0],[0,1],[0,2]],
  [[0,0],[1,0],[0,1],[1,1]],
  [[0,0],[1,0],[2,0],[3,0]],
  [[0,0],[0,1],[0,2],[0,3]],
];

const COLORS = [
  "#ff5f5f",
  "#ffb703",
  "#8ecae6",
  "#9b5de5",
  "#00f5d4",
  "#f15bb5"
];

export function generateBlocks() {
  const blocks = shuffle([...SHAPES]).slice(0, 3);
  return blocks.map(shape => ({
    shape,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  }));
}
