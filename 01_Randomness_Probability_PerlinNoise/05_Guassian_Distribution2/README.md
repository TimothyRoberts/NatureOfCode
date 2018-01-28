# Random Walker

Here, the exact same principles used in the previous exercise were used. The only difference is that a now mean and standard deviation was added to the y coordinates of the ellipses aswell as the x coordinates. 

```js
function draw() { 
  //x and y location has a mean of 0 and a standard
  //deviation of 1
  var xloc = randomGaussian();
  var yloc = randomGaussian();
  
  var xsd = 100;
  var ysd = 40;

  var xMean = width/2;
  var yMean = height/2;

  xloc = (xloc * xsd) + xMean
  yloc = (yloc * ysd) + yMean

  var rColor = 233;

  fill(rColor,50);
  noStroke();

  ellipse(xloc, yloc, 16, 16);
}
```