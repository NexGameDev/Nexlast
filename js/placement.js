let dragged=null;

function renderBlocks(){
  const el=document.getElementById("blocks");
  el.innerHTML="";
  for(let i=0;i<3;i++){
    const shape=randomBlock();
    const b=document.createElement("div");
    b.className="block";
    shape.forEach(()=>b.appendChild(document.createElement("div")).className="block-cell");
    b.onmousedown=()=>dragged=shape;
    el.appendChild(b);
  }
}
