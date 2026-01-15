let score=0;
let multiplier=1;

function addScore(v){
  score+=v*multiplier;
  document.getElementById("score").textContent="Score: "+score;
  checkNex();
}
