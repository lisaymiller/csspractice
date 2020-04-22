// var bus = ["George", "Kayley", "Students", "Ghosts"]
// //arrays start at 0, not 1

// console.log(bus[0]);

// //() used generally point toward a function, [] represent arrays, {} used when writing a loop
// //Push and pop - directed toward the last index in an array
// //Shift - removes first index, unshift adds an index to the beginning

// console.log(bus.unshift("Stanislav"));
// console.log(bus);
// console.log(bus.shift());
// console.log(bus);
// bus.pop(); 
// // dont need to console log if you dont need to see it
// console.log(bus);
// bus.push("Gorkem");
// console.log(bus);

// //arb adding

// bus[3]="Pernell";
// console.log(bus);

// //index of
// console.log(bus.indexOf("Pernell"));

// //slice accepts two arguments start and ends, does not mutate

// var a = ['a','b','c','d','e','f','g'];

// console.log(a.slice(1,4));

// //splice (start, number to remove, 'items to add');

// console.log(a.splice(2,3, "z","y","x"));
// console.log(a);

//iterate over an array

// var bus = ['George', 'Kayley', 'Myisha', 'Josh', 'Mikhail', 'Dominick', 'JP', 'Ash', 'Mela']

// var x = 0;

// while(x <= bus.length){
// 	console.log(x);
// 	x++

// }

// for (let i=0; i< bus.length; i++) {
// 	console.log(bus[i]);
// 	if (bus[i]=='Ash'){
// 		console.log('End of bus');
// 		break;
// 	}
// }

//strings

// teachers = ['George', 'Kaley'];
// console.log(teachers);
// console.log(teachers.toString()); 
// console.log(teachers.join(' loves '));

//sort and reverse 0         1            2               3  
//var people = ['Assaf', 'Shane', 'Everybody', 'Signey Crosby'];

// var people = ['Assaf', 'Shane', 'Everybody', 'Signey Crosby'];

// console.log(people.sort());

// console.log(people.reverse());


//exercise 1 redone

// var list = ['pop tarts','ramen noodles','chips','salsa','coffee'];
// // console.log(list);
// list.push('fruit loops');
// // console.log(list);
// list.splice(4,1,'fair trade coffee');
// // console.log(list);
// list.splice(2,2, "rice", "beans");
// // console.log(list);
// var cart = [];
// cart.unshift(list.pop());
// cart.push(list.shift());

// while(list.length>0){
// 	cart.push(list.pop());
// }

// console.log(list);
// console.log(cart);
// console.log(cart.sort());
// console.log(cart.join(", "));