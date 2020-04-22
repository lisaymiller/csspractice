//do something later (call back pattern)
setTimeout(function(){
	console.log('later')
},2000);


teacher.speak();

var teacher = {
	name: 'Shane',
	speak: function() {
		
		//Save this to a variable
		var self = this;
		
		//self is visible inside function because of closure
		setTimeout(function(){
			console.log('later my name is ' + self.name);
		},1000);
	}
}

var teacher = {
	name: 'Shane',
	speak: function() {
		
		//Bind a function to a specific context
		var boundFunction = function(){
			console.log('later my name is ' + this.name);
		}.bind(this);
		
		//boundFunction will always run in bound context
		setTimeout(boundFunction,1000);
	}
}

var teacher = {name: 'Shane'};

var speak = function(item1, item2){
	console.log(this.name, item1, item2);
}

speak.call(teacher, 'coffee', 'ramen'); //'Shane', 'coffee', 'ramen'
speak.apply(teacher, ['coffee', 'ramen']); //'Shane', 'coffee', 'ramen'