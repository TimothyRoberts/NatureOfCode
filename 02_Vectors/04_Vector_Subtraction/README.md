# Bouncing Ball with Vectors

Three vectors are used in this excercise. One to calculate the mouse coordinates, one to plot the center coordinates, and one to subtract the mouse from the center - this last coordinate is used to draw the line.

```js
function setup() {
  createCanvas(640,360);
}

function draw() {
  background(51);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  //fill(127);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```