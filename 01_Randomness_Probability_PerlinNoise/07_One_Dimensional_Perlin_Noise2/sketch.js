var walker;
var noOfWalkers;

function setup() {
  createCanvas(1200,1000);
  noOfWalkers = 10;
  walkers = [];

  //Loops 10 times and creates 10 walker objects
  for(i = 0; i < noOfWalkers; i++){
    walkers[i] = new Walker();
  }
  background(127);
}

function draw() { 
  fill(0,15);
  rect(0, 0, width, height);

  //loops 10 times - steps and renders each
  //walker object in the array
  for(i = 0; i < noOfWalkers; i++) {
    walkers[i].step();
    walkers[i].render();
  }
}

function Walker() {

  //position set to center of canvas
  //noff set to random x, y point between 1000, 1000
  this.position = createVector(width/2, height/2);
  this.noff = createVector(random(1000), random(1000));

  this.step = function() {
    //x and y position now set to smoothly move randomly along 
    //(and 200 pixels off) canvas
    this.position.x = map(noise(this.noff.x), 0, 1, 0 -200, width + 200);
    this.position.y = map(noise(this.noff.y), 0, 1, 0 -200, height + 200);
    //this controls how smooth the random movement will be
    this.noff.add(0.005, 0.005);
  }

  this.render = function() {
    noStroke();
    fill(255, 45, 0, 50);

    //ellipse drawn at established x and y points
    //size is then mapped between 20 and 200 using perlin noise
    ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200), 
      map(noise(this.noff.x), 0, 1, 20, 200));

  }

}

