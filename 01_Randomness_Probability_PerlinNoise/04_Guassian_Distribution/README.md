# Random Walker

In this exercise we are using p5's randomGuassian() function to manipulate the x coordinate value of ellipses that are being drawn onto our canvas. Here I am referencing the description of this function provided on p5js.org: 

"There is theoretically no minimum or maximum value that randomGaussian() might return. Rather, there is just a very low probability that values far from the mean will be returned; and a higher probability that numbers near the mean will be returned. 

Takes either 0, 1 or 2 arguments.
If no args, returns a mean of 0 and standard deviation of 1.
If one arg, that arg is the mean (standard deviation is 1).
If two args, first is mean, second is standard deviation."

First, we create a canvas with a grey background in the setup() function. In the draw loop we are assigning the variable xloc with a random gaussian value where the mean is equal to 0 and the standard deviation is 1 (between -1 and 1). We make the mean half the width of the canvas and add that onto the variable xloc so that the mean is now viewed as being in the middle, and we multiply xloc by 68 to scale up the random guassian value given. Finally we draw an ellipse using xloc as it's x coordinate and see how the majority of circles are being drawn in and around the middle.

```js
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
```js