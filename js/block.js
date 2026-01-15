const shapes = [
 [[0,0]], [[0,0],[1,0]], [[0,0],[0,1]],
 [[0,0],[1,0],[0,1]],
 [[0,0],[1,0],[2,0]],
 [[0,0],[0,1],[0,2]]
];

function randomBlock(){
  return shapes[Math.floor(Math.random()*shapes.length)];
}
