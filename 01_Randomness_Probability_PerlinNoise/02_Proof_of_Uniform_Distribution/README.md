# Proof of Uniform Distribution

In this exercise the aim was to prove how the random() function in p5 is a form of uniform distribution. What this means is that the outcome is not completely random - the function checks to see what random values have already been assigned and it has less of a chance of repeating a number already given when generating a new random number. For example if a random value of 3 is given, the next random value is not likely to be another 3 so it is not truly random.

The objective was to illustrate this lack of total randomness using rectangles - every frame a "randomly" chosen rectangle will increment in height. First we create an array called randomCounts and store 20 variables inside it each equal to 0. 

```js
var randomCounts = [];
var total = 20; 

function setup() {
  createCanvas(640,360);
  for(var i = 0; i < total; i++){
    randomCounts[i] = 0;
  }
}
```

In the draw function (which is constantly looping) we select a "random" variable from our array and increment its value by 1.
```js
function draw() {

  background(127); //draws over canvas each frame

  //increments value of a randomly selected member of the array
  var index = floor(random(total));
  randomCounts[index]++; //eg randomCounts[8]++

```

We then draw 20 rectangles side by side using the arrays value to determine the height - so if randomCounts[8] = 1, then the 8th rectangle will be 1 pixel high. 

```js
stroke(0);
  strokeWeight(2);
  fill(255);

  var w = width/randomCounts.length; //width/20

  for(var x = 0; x < randomCounts.length; x++) {
    rect(x*w, height - randomCounts[x], w-1, randomCounts[x]);
  }

}
```

These rectangles now show us what random numbers are being selected by the random() function. The results show us that the rectangles are all similar in height. If the results were truly random, it would be more probable that one rectangle may be far higher than another. Uniform distribution takes into consideration the random values that have already been created.