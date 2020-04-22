var teacher="Zach";
var teacher2="Kayley";
var teacher3="George";

var teachers=["Zach", "Kayley", "George"];

console.log(teacher); //Zach
console.log(teacher2);//Kayley

console.log(teachers[0]); //Zach
console.log(teachers[1]); //Kayley
console.log(teachers[2]); //George

teachers.length; //tells you how many items are in your array
console.log(teachers.length);

//Adds new elements to the end of an array
teachers.push("Gary", "Pasha");

//Removes the last elements of an array
teachers.pop();

//Remove first elements of an array
teachers.shift();

//Tells you where item is in array
console.log(teachers.indexOf("George"));

//Add an item to the beginng of an array
teachers.unshift("Shane"); //returns length, will see integer if console.log

//Selects section of items in array and returns them in a new array without changing the original array
//first number is where you want to start, and last number is where you want to end
teachers.slice(1,3);

//Selects items in an array, removes them, and returns them as an array
//first number is number you want to start at, but second number is how many items do you want to remove
//negative number counts backwards/counts from the back
teachers.splice(0,3);
//need to put items into a variable so they can be saved
var firstTeachers=teachers.splice(0,3);
console.log(teachers);
var lastTeachers=teachers.splice(-4,4);
console.log(teachers);

//iterations
console.log(teachers);
for (var i=0; i<teachers.length; i++) {
	console.log(teachers[i]);
}

//sorting
teachers.sort();
teachers.reverse();

