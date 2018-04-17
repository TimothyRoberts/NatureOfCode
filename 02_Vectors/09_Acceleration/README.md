# Vector Acceleration

Similar to the previous example, here we add an acceleration vector to the velocity each frame. A top speed limit is added so that it doesn't continuosly accelerate.

```js
var Mover = function() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2,2), random(-2,2));
    this.acceleration = createVector(-0.01, 0.01);

    this.topSpeed = 25;


  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);
  }
```
