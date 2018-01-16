var walker; 

function setup() {
  createCanvas(320,640); 
  background(127);
  walker = new Walker();
}

//LOOPS AND EXECUTES WALKER FUNCTIONS
function draw() {
  walker.render();
  walker.step();
}

//WALKER CLASS
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
    var choice = floor(random(4)); //floor() changes the random float into its rounded down integer
    if(choice === 0){
      this.x++;
    } 
    else if(choice === 1){
      this.x--;
    }
    else if(choice === 2){
      this.y++;
    }
    else {
      this.y--;
    }

    //Restricts point's x and y to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

  }

}