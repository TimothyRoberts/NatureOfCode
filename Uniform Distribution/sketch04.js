function setup() {
  createCanvas(640,360); 
  background(127);
}

function draw() { 

  //x location has a mean of 0 and a standard
  //deviation of 1
  var xloc = randomGaussian();
  console.log(xloc);

  //standard deviation is 68%
  var sd = 68;
  var mean = width/2;

  xloc = (xloc * sd) + mean;

  fill(0,10);
  noStroke();
  ellipse(xloc, height/2, 16, 16);

}