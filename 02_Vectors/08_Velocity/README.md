# Vector Velocity

In this example, a class is created to draw an ellipse and update it's position each frame. The position changes by adding a velocity vector to the position

```js
var Mover = function() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2,2), random(-2,2));


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.update = function() {
    this.position.add(this.velocity);
  }
```
