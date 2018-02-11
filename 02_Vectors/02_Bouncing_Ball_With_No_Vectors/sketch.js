var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;

function setup() {
  createCanvas(640,360); 
}


function draw() {
  background(51);

  //add the current speed to position
  x = x + xspeed;
  y = y + yspeed;

  if((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }

  //display circle at xand y position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, y, 48, 48);
}
