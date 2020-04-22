function Particle (startX,startY) {
	this.x= startX,
	this.y= startY,
	velocity= {x:0, y:0}
}

let particles=[];
for (var i=0; i<100; i++) {
	particles.push(new Particle(i,Math.random()*500));
}

console.log(particles);
//The constructor is like the template, and the new Particle with the values, is a new instance of that object or a new object with random variables

