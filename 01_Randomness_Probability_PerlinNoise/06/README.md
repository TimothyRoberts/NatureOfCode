# One Dimensional Perlin Noise

We create a walker class and create the canvas in our setup function.

```js
var walker;

function setup() {
  createCanvas(1200,1000);
  walker = new Walker();
  background(127);
}
```

In the draw loop, a light opacity rectangle is drawn each frame so that a trail of previous frames is left briefly. The step and render functions from the walker class are being called from the draw loop.

```js
function draw() { 
  //Covering canvas with light opacity rectangle
  //each frame to create trail effect
  fill(0,15);
  rect(0, 0, width, height); 

  walker.step();
  walker.render();
}
```


In the step function, The map function scales up the first parameter given from the current range to the desired range (provided in the following parameters). noise(this.xOff) is being passed in a random number from 0 to 1000 and returns a float between 0 and 1. As this.xOff is incremented each loop the noise function generates a random value close to the previous one to give a smooth randomness.

The render function then draws this smooth movement with it's x coordinate

```js
function Walker() {
  this.x = width/2;
  this.xOff = random(1000);

  this.render = function() {
    noStroke();
    fill(255, 45, 0, 50);
    ellipse(this.x, 500, 40, 40);
  }

  this.step = function() {
    this.x = map(noise(this.xOff), 0, 1, 0, width);
    this.xOff += 0.005; //how quickly time is passing
  }

}
```