renderBlocks();

boardEl.onclick=e=>{
  if(!dragged) return;
  const x=+e.target.dataset.x;
  const y=+e.target.dataset.y;
  if(canPlace(dragged,x,y)){
    place(dragged,x,y);
    addScore(dragged.length*10);
    renderBlocks();
  }
};
