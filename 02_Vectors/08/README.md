# Vector Normalization

In this example, the line becomes a unit vector by using the normalize and mult function. Normalize makes the cector length equal to 1, then we simply multiply that by 50 to increase its length.

```js
function draw() {
  background(51);

  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width / 2, height / 2);
  var vectorLine = mouse.sub(center);
  //vectorLine.mult(0.5);

  vectorLine.normalize();
  vectorLine.mult(50);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```