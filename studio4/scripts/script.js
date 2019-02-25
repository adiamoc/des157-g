'use strict';

console.log('Reading js...');

var r = 255;
var g = 255;
var b = 255;
var grid = 25;
var s = grid/2;
var myCanvas;
var w = 600;
var h = 600;

function update(picker) {
    r = picker.rgb[0];
    g = picker.rgb[1];
    b = picker.rgb[2];
}

function setup() {
  myCanvas = createCanvas(w, h);
  myCanvas.parent('canvas');

  background(220,220,220);

  rectMode(RADIUS);

  noStroke();

}

function draw() {
  if (mouseIsPressed && (mouseButton == LEFT)) {
    fill(r,g,b);
    noStroke();
    rect(int(mouseX/grid)*grid + grid/2, int(mouseY/grid)*grid +grid/2, s, s, grid-s*2);
  }
  if (mouseIsPressed && (mouseButton == CENTER)) {
    fill(220,220,220);
    noStroke();
    rect(int(mouseX/grid)*grid + grid/2, int(mouseY/grid)*grid +grid/2, grid/2, grid/2);
  }

  stroke(255);
  for (var i = grid; i <= w; i+=grid) {
  	line(i, 0, i, h);
  }
  for (var i = grid; i <= h; i+=grid) {
  	line(0, i, w, i);
  }

}