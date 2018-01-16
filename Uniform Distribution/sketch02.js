var randomCounts = [];
var total = 20; 

function setup() {
  createCanvas(640,360); 
  for(var i = 0; i < total; i++){
    randomCounts[i] = 0;
  }
}


function draw() {

  background(127); //draws over canvas each frame

  //increments value of a randomly selected member of the array
  var index = floor(random(total));
  randomCounts[index]++; 

  //draws rectangle each frame
  stroke(0);
  strokeWeight(2);
  fill(255);

  var w = width/randomCounts.length; //width/20

  for(var x = 0; x < randomCounts.length; x++) {
    rect(x*w, height - randomCounts[x], w-1, randomCounts[x]);
  }

}