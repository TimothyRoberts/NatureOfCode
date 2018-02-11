# Bouncing Ball with Vectors

Here the code from the previous folder (02_Bouncing_Ball_with_No_Vectors) is altered to use vectors rather than variables to store attributes with an x and a y coordinate. A vector is a single variable that stores an x and a y location.

```js
var position;
var velocity;

function setup() {
  createCanvas(640,360);
  position = createVector(100, 100);
  velocity = createVector(4, 4);
}
```

The vector x and y location can be accessed by writing variableName.x or variableName.y. For example position.x will return 100.

```js
function draw() {
  background(51);

  //add the current speed to position
  position.x = position.x + velocity.x;
  position.y = position.y + velocity.y;

  if((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  //display circle at xand y position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
}
```