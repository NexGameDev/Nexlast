let score = 0;

export function addScore(v) {
  score += v;
  document.getElementById("score").textContent = score;
}
