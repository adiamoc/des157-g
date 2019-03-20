'use strict';

console.log('Reading js...');

var r = 255;
var g = 255;
var b = 255;
var grid = 5;
var s = grid/2;
var myCanvas;
var w = 600;
var h = 600;

var sliderW = document.getElementById("width");
var valW = document.getElementById("valw");
valW.innerHTML = sliderW.value;

var sliderH = document.getElementById("height");
var valH = document.getElementById("valh");
valH.innerHTML = sliderH.value;

sliderW.oninput = function() {
  valW.innerHTML = this.value;
}

sliderH.oninput = function() {
  valH.innerHTML = this.value;
}

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


function newCanvas() {
  w = sliderW.value;
  h = sliderH.value;
  myCanvas = createCanvas(w, h);
  myCanvas.parent('canvas');
  background(220,220,220);

  document.getElementById('create_canvas').classList.add('no_create');
  document.getElementById('create_canvas').classList.remove('grey');
  document.getElementById('new_canvas').classList.add('hide');
  document.getElementById('drawnow').classList.remove('blurry');


}
var checkbox1 = document.querySelector("input[name=eraser]");
var eraser = document.getElementById("eraser").checked;

checkbox1.addEventListener( 'change', function() {
    eraser = document.getElementById("eraser").checked;
});


var checkbox2 = document.querySelector("input[name=bg]");
var bg = document.getElementById("bg").checked;
var helpme = document.getElementById("helpme");

checkbox2.addEventListener( 'change', function() {
    bg = document.getElementById("bg").checked;

    if (bg ==true) {
      helpme.classList.remove('hide');
    } else {
      helpme.classList.add('hide');

    }
});


function saveImg() {
  saveCanvas(myCanvas, 'drawing', 'jpg');
  
}

function draw() {
  if (mouseIsPressed && eraser==false) {
    fill(r,g,b);
    noStroke();
    rect(int(mouseX/grid)*grid + grid/2, int(mouseY/grid)*grid +grid/2, s, s, grid-s*2);
  }
  if (mouseIsPressed && eraser==true) {
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