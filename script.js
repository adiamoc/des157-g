console.log('Reading js...');

// function setup() {
//   // size(800, 250);
//   var myCanvas = createCanvas(800, 250);
//   myCanvas.parent('mySketch');
// }
//
// function draw(){
//   noStroke();
//   ellipse(mouseX, mouseY, 50, 50);
// }


var grid = 25;
var s = 10;
var myCanvas;

function setup() {
  // size(800, 250);
  myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(220, 30, 20);
  rectMode(RADIUS);

  // Hi
  noStroke();
  rect(int(729/grid)*grid + grid/2, int(197/grid)*grid +grid/2, s, s, grid-s *2);
}

function draw() {
  if (mouseIsPressed && (mouseButton == LEFT)) {
    fill(255);
    noStroke();
    rect(int(mouseX/grid)*grid + grid/2, int(mouseY/grid)*grid +grid/2, s, s, grid-s*2);
  }
  if (mouseIsPressed && (mouseButton == CENTER)) {
    fill(220, 30, 20);
    noStroke();
    rect(int(mouseX/grid)*grid + grid/2, int(mouseY/grid)*grid +grid/2, grid/2, grid/2);
  }
}

function keyPressed() {
  if (keyCode == BACKSPACE) {
    background(220, 30, 20);
  }
}
