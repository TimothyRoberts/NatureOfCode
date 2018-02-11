# Vector Multiplication/Division

Just like in the last exercise a line is created from the mouse coordinates to the center. This time the vectorLine x and y is multiplied by 0.5 which divides the line in half.

```js
function draw() {
  background(51);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  vectorLine.mult(0.5);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```