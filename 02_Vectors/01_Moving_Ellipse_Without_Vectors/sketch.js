var x = 320;
var y = 180;
var xspeed = 2;

function setup() {
  createCanvas(640,360); 
}


function draw() {
  background(51);

  //add the current speed to position
  x = x + xspeed;

  if((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  //display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, 180, 48, 48);
}
