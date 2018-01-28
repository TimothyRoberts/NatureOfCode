function setup() {
  createCanvas(640,360); 
  background(127);
}
 
function draw() { 

  //x location has a mean of 0 and a standard
  //deviation of 1
  var xloc = randomGaussian(width/2, 68);
  console.log(xloc);

  //standard deviation is 68%

  fill(0,10);
  noStroke();
  ellipse(xloc, height/2, 16, 16);

}