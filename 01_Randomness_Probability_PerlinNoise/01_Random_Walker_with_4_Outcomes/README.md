# Random Walker

In this exercise a point is drawn on the canvas that randomly steps up, down, left or right each frame. The background is not refreshed each frame so the trail of the particle is left visible.The random() function from the p5 library is being used to determine which direction the particle will step to. 

The first step was to establish a class called walker.

```js
var walker; 

function setup() {
  createCanvas(320,640); 
  background(127);
  walker = new Walker();
}
```

Inside this walker class, there are two functions. Inside the render function, a point is drawn in the middle of the canvas. In the step function, a random integer between the range of -1 to 1 is chosen for the variables stepx and stepy. The value is then added onto the points x and y coordinates making it move up, down, left or right. The point is also contrained within the canvas using p5's constrain() function.

 ```js
function Walker() {
  this.x = width/2;
  this.y = height/2;

  //DRAWS POINT ON CANVAS
  this.render = function(){
    stroke(0);
    point(this.x,this.y);
  }

  //RANDOMLY CHANGES POINT X/Y COORDINATES
  this.step = function(){
    
    var stepx = floor(random(-1,2));
    var stepy = floor(random(-1,2));

    this.x += stepx;
    this.y += stepy;

    //Restricts point's x and y to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  }

}
```

Inside the draw method (which is constantly looping) is where these functions within the walker class are being called.

```js
function draw() {
  walker.render();
  walker.step();
}
```

