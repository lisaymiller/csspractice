//constructor exercise

function Particle(startX,startY) {

	this.x = startX;
	this.y = startY;
	velocity = {x:0,y:0};
	}

var particles= [];
for (var i=0; i<100; i++) {
	particles.push(new Particle(i,Math.random()*500));
	}
	

// console.log(particles);


//prototype exercise

let time = 0;
let gravity = 0.5;

Particle.prototype = {
		getVeloctiy: function(){
			return time * gravity;
		}
		// console.log('Prototypes are important, says ' + this.name);
		move: function(){
			this.y += this.getVeloctiy();
			if(this.y >=500)
				console.log('bottom');
		}
}

setInterval(function(){
	time++;
	particles.filter(function(p){
		console.log(p.x)
		return p.y < 500;
	})
	.forEach(function(p){
		p.move();
	})
},100)

console.log(particles)