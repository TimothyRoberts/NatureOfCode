# Proof of Uniform Distribution

In this exercise the aim was to prove how the random() function in p5 is a form of uniform distribution. What this means is that the outcome is not completely random - the function checks to see what random values have already been assigned and it has less of a chance of repeating a number already given when generating a new random number. For example if a random value of 3 is given, the next random value is not likely to be another 3 so it is not truly random.

To illustrate this, we create an array called randomCounts and store 20 variables inside it each equal to 0. 

In the draw function (which is constantly looping) we select a "random" variable from our array and increment its value by 1.

We then draw 20 rectangles side by side using the arrays value to determine the height - so if randomCounts[8] = 1, then the 8th rectangle will be 1 pixel high. 

These rectangles now show us what random numbers are being selected by the random() function. The results show us that the rectangles are all similar in height. If the results were truly random, it would be more probable that one rectangle may be far higher than another. Uniform distribution takes into consideration the random values that have already been created.