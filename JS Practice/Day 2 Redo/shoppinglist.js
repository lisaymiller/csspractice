var list=["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
list.push("fruit loops");
console.log(list.indexOf("coffee")); //4
list[4]="fair trade coffee";
list.splice(2,2, "beans", "rice");

var cart=[];

cart.push(list.pop());
cart.push(list.shift());

while (list.length != 0) {
	cart.push(list.pop());
}

console.log(list);
console.log(cart);

cart.sort();
cart.reverse();
console.log(cart.toString());

