let nex=0;
function checkNex(){
  const gained=Math.floor(score/1000);
  if(gained>nex){
    nex=gained;
    document.getElementById("nex").textContent="NEX: "+nex;
  }
}
