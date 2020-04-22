
// var amountRaisedSoFar = 1000;

// var newDonation = prompt("How much would you like to donate?"); 
// // returns string but we want a number

// amountRaisedSoFar = Number(newDonation) + amountRaisedSoFar; 
// //changing it to number + number

// console.log("We have now raised " + amountRaisedSoFar + "!");


// challenge 1

// var cupsOfCoffee = 4;

// if (cupsOfCoffee < 3) {
// 	console.log("Yes I'll take another cup of coffee");
// }

// if (cupsOfCoffee > 3) {
// 	console.log("I think I'm okay for now");
// }

// if (false && true){
// 	console.log("true");
// }
// else {
// 	console.log("false");
// }


// challenge 2

// var temp = 85;
// var precipitation = false;
// var indoors = true;

// console.log("The temperature is " + temp + " degrees");

// if (temp > 80 && precipitation === false) {
//   console.log("Time to swim!");
// } else if (indoors) {
//   console.log("Time to swim!");
// }

// challenge 3
// **i++ is equal to i+1

// for (let i=0; i<=9; i=i+2 ){
// 	console.log(i);
// }

let bottle = 99;

for (bottle; bottle >= 0; bottle --){

  if (bottle === 0) {
    console.log("Hey! Go buy more root beer!");
  } else {
      console.log(bottle + " bottles of root beer on the wall");
  }
}