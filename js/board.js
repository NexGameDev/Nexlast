const boardSize = 10;
const board = [];
const boardEl = document.getElementById("board");

for(let y=0;y<boardSize;y++){
  board[y]=[];
  for(let x=0;x<boardSize;x++){
    board[y][x]=0;
    const c=document.createElement("div");
    c.className="cell";
    c.dataset.x=x;
    c.dataset.y=y;
    boardEl.appendChild(c);
  }
}

function canPlace(shape, ox, oy){
  return shape.every(([x,y])=>{
    const nx=ox+x, ny=oy+y;
    return board[ny]?.[nx]===0;
  });
}

function place(shape, ox, oy){
  shape.forEach(([x,y])=>{
    board[oy+y][ox+x]=1;
    document.querySelector(`.cell[data-x="${ox+x}"][data-y="${oy+y}"]`).classList.add("filled");
  });
}
