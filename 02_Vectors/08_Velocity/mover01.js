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

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(220, 170, 0);
    ellipse(this.position.x, this.position.y, 16, 16);
  }

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }

}