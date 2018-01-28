# Random Walker

In this exercise we have taken our random walker code (see 01_Random_Walker_with_4_outcomes from previous folder) and edited the step function to have a higher probability of moving right than any other direction.

To do this, we introduced a new variable r which gets assigned a random float anywhere between 0 and 1. If this float is less than 0.4 then it moves one step to the right - this means there is a 40% chance of the point moving right. If the float is not less than 0.4 but less than 0.6 then it moves left (meaning there is a 20% chance of it moving left). The same principal used for moving right also is applied to moving up or down - therefore there the probability of the cell moving right is 40%, and 20% in any other direction.

```js
//RANDOMLY CHANGES POINT X/Y COORDINATES
  this.step = function(){
    
    //40% chance of moving right
    //20% chance moving in other directions
    var r = random(1);

    if(r < 0.4) {
      this.x ++;
    }
    else if(r < 0.6){
      this.x--;
    }
    else if(r < 0.8){
      this.y++;
    }
    else{
      this.y--;
    }

    //Restricts point's x and y to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  };
  ```js
