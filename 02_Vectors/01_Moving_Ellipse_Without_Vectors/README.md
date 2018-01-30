#Moving an Ellipse (Without Vectors)

First we establish our x and y coordinates the ellipse will be using. We need to declare two variables to store these values - later when we use vectors we will only need to declare one vector for this. Our speed we want our ellipse to move at is also declared, then in the setup we create our canvas.

```js
var x = 320;
var y = 180;
var xspeed = 2;

function setup() {
  createCanvas(640,360); 
}

```

In the draw loop, we set the background to refresh each frame so that a trail of the ellipse is not left. We then add our speed onto the x position - this will move the position 2 pixels per frame. If the x position leaves the frame, we multiply the speed by -1 to change it's direction. We then simply draw an ellipse assigning our x variable to the x coordinate. 

```js
function draw() {
  background(51);

  //add the current speed to position
  x = x + xspeed;

  if((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }

  //display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, 180, 48, 48);
}

```