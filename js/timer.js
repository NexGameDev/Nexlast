let boosterEnd=0;

function startTimer(){
  boosterEnd=Date.now()+300000;
}

setInterval(()=>{
  if(boosterEnd>Date.now()){
    const s=Math.ceil((boosterEnd-Date.now())/1000);
    document.getElementById("booster-timer").textContent=`${s}s`;
  }else{
    multiplier=1;
    document.getElementById("booster-timer").textContent="";
  }
},1000);
