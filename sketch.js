var Mult = new Multitable(500,3,360);
let slider;
var u = 202;

function setup() {
  createCanvas(1000, 1000);
  frameRate(90);
  slider = createSlider(2, 200, 2,1);
}

function draw() {
  background(0);
  //let num = slider.value();
  console.log(slider.value());
  translate(width/2, height/2);
  Mult.show();
  Mult.drawLines();
  //Mult.setN(num);
  Mult.setMult(u);
  u += 0.005;

  textSize(50);
  fill(255);
  text(` X ${u.toFixed(2)}`,width/2 - 300, 25);
}


