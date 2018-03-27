var angle = 0;
var aVelocity = 0;
var aAcceleration = 0.002;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(0);

	stroke(220, 170, 0);
	fill(220, 170, 0);
	//strokeWeight(1);

	push();
	translate(width/2, height/2);
	rotate(angle);
	line(-60, 0, 60, 0);
	ellipse(60, 0, 16, 16);
	ellipse(-60, 0, 16, 16);
	pop();

	aVelocity += aAcceleration;
	aVelocity = constrain(aVelocity, 0, 0.1);
	angle += aVelocity;


}