document.getElementById("buy-booster").onclick=()=>{
  if(nex>=5){
    nex-=5;
    document.getElementById("nex").textContent="NEX: "+nex;
    activateBooster();
  }
};
