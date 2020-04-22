// // Arrays
// var teachers = ['Lebron', 'Kobe'];
// console.log(teachers[0]) // Lebron
// // Push and Pop - used to add and remove items to the back of an array list
// var teachers = ['Branson', 'Noelle'];
// teachers.push('Charlie','Hallie'); // ['Branson', 'Noelle', 'Charlie', 'Hallie']
// var teacher1 = teachers.pop(); 
// console.log(teacher1);
// // Shift and Unshift - used to add and remove items to the front of an array list
// var teachers = ['Branson', 'Noelle'];
// teachers.unshift('Charlie'); // ['Charlie', 'Branson', 'Noelle']
// var teacher2 = teachers.shift(); //teacher == 'Charlie', teachers = ['Branson', 'Noelle']
// console.log(teacher2)
// // Arbitrary Adding
// var teachers = ['Branson', 'Noelle', 'Lebron', 'Kobe'];
// teachers[4] = 'Cam Newton' // ['Branson', 'Noelle', 'Lebron', 'Kobe', 'Cam Newton'];
// teachers[4] = 'Barack Obama' // ['Branson', 'Noelle', 'Lebron', 'Kobe', 'Barack Obama'];
// // Finding an item
// var a = [10, 11, 20];
// a.indexOf(11); // 1
// a.indexOf(50); // -1
// // Slicing and Splicing
// var a = [1,2,3,4];
// // Slice - doesn't mutate array, slice(start, end). Used to return a shallow copy of a portion of an array into a new array object
// a.slice(0,2); //[1,2]
// 'abcd'.slice(1,3) // 'bc'
// // Splice - splice(start,numToRemove...items to add) - this does mutate. Tells us where to start, how many items to remove from the starting point and then what we are going to replace it with
// a.splice(1,2,'a','b'); // a is [1,'a','b',4]
// // Iterating over Arrays using for loop and forEach
// var teachers = ['Lebron', 'Kobe', 'Cam Newton'];
// for(var i = 0; i < teachers.length; i++) {
// 	console.log(teachers[i]);
// }
// // Console will print
// // Lebron
// // Kobe
// // Cam Newton
// // Uses a function
// teachers.forEach(function(item, index) {
// 	console.log(item, index);
// });
// // Console will print
// // Lebron 0
// // Kobe 1
// // Cam Newton 2
// // Converting arrays to strings
// teachers = ['Branson', 'Noelle'];
// teachers.toString(); // 'Branson,Noelle';
// teachers.join('&'); // 'Branson&Noelle';
// // Sorting arrays
// var a = [2, 1, 3]
// a.sort(); //[1,2,3]
// a.reverse(); //[3,2,1]
// // Exercise 1
// // Create array and add fruit loops to list
// var list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
// list[5] = 'fruit loops'
// console.log(list);
// // Update 'coffee' to 'fair trade coffee'
// list[4] = 'fair trade coffee'
// console.log(list);
// // Replace 'chips' and 'salsa' with 'rice' and 'beans'
// list.splice(2,2,'rice','beans');
// console.log(list);
// // Create an empty array to represent your shopping cart
// // Remove the last item from your shopping list and add it to your cart
// var cart = [];
// cart[0] = list.pop();
// console.log(cart);
// // Remove the first item from your shopping list and add it to the cart
// cart[1] = list.shift();
// console.log(cart);
// // Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list
// while(list.length > 0) {
//     cart.push(list.pop());
// }
// console.log(cart);
// // Sort the items in your cart alphabetically... backwards
// cart.sort().reverse();
// console.log(cart);
// // Print the list of items in your shopping cart to the console as comma separated string.
// console.log("My cart contains: ", cart.toString());

//My notes

// var teachers = ['Kayley', 'George', 'Gary'];
// console.log(teachers[0])  //kayley

// var teachers = [1,2,3];
// teachers.length==3;
// console.log(teachers)

// var teachers = ['Assaf','Shane'];
// teachers.push('Shane');
// var teacher1=teachers.pop();
// console.log(teacher1);

// var teachers = ['Assaf', 'Shane'];
// teachers.unshift('Zack','Bo');
// var teacher = teachers.shift();
// console.log(teachers);

// var artists = ['J Cole', 'Lil Donald'];
// artists.unshift('Kendrick Lamar');
// artists[3] = 'Twista';
// console.log(artists);

// var artists=['J Cole', 'Lil Donald', 'Sza', 'Kendrick Lamar'];
// console.log(
// artists.indexOf('akdsjfn')
// 	);

// var a = ['aa','bb','cc','dd'];
// var b = a.splice(1,2, 'a','b');
// console.log(a);

//Exercise 1
//Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
// Add 'fruit loops' to the list.
// Update 'coffee' to 'fair trade coffee'
// Replace 'chips' and 'salsa' with 'rice' and 'beans'
// Create an empty array to represent your shopping cart.
// Remove the last item from your shopping list and add it to your cart
// Remove the first item from your shopping list and add it to the cart
// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
// Sort the items in your cart alphabetically... backwards
// Print the list of items in your shopping cart to the console as comma separated string.

var shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shoppingList.push("fruit loops");
shoppingList[4]= "fair trade coffee";
shoppingList.splice(2,2, "rice", "beans");


var shoppingCart=["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"];

console.log();
console.log('Shopping list');
console.log();

for(var i=0; i< shoppingList.length; i++){
	console.log(shoppingList[i]);
}

console.log();
console.log('Shopping cart');
console.log();

for(var i=0; i<shoppingCart.length; i++) {
	console.log(shoppingCart[i]);
}

shoppingCart.push(shoppingList.pop());
shoppingCart.pop(shoppingList.push());

console.log(shoppingCart)