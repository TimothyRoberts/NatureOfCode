var mover;

function setup(){
	createCanvas(600,600);
	mover = new Mover();
}

function draw(){
	background(0);

	var gravity = createVector(0, 0.2);
	var wind = createVector(0.01, 0);

	mover.checkEdges();
	mover.applyForce(gravity);
	mover.applyForce(wind);
	mover.update();
	mover.display();


}
