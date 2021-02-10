function setup() {
	createCanvas(windowWidth, windowHeight);
	background( _palette(bg-alt));
}

function draw() {
	fill(random(255), random(255), 255,random(50,200));
	noStroke();
	ellipse(random(mouseX-80,mouseX+80), random(mouseY-80,mouseY+80), random(10,40));
}