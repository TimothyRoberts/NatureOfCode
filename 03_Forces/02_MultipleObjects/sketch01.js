var movers = [];

function setup(){
	createCanvas(600,600);
	for(var i = 0; i < 10; i++){
		movers[i] = new Mover(random(0.1, 5), 0, 0); //m,x,y
	}
}

function draw(){
	background(0);

	var gravity = createVector(0, 0.2);
	var wind = createVector(0.02, 0);

	for(var i = 0; i < 10; i++){
		movers[i].checkEdges();
		movers[i].applyForce(gravity);
		movers[i].applyForce(wind);
		movers[i].update();
		movers[i].display();
	}

}
