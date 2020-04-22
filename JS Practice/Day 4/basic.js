// function tuesday() {
//     console.log('Where did Monday go?');
//     console.log('Why is there so much pollen');
//     console.log('Has George had two cups of coffee yet?');
//     //this is the body of the function
// }


// function sum(ex1,ex2) {
//     var sumOfTwo = ex1 + ex2;
//     return sumOfTwo;
// }

//declaring a functio includes naming and defining the function

// console.log(sum(2,3));

//order matters!!!


// function helpMe (){
//     let msg = "I'm on fire!!";
//     return msg;
//     console.log(msg);
// }
// //cannot access msg outside scope of the function

// console.log(helpMe());



// JS used to only use var, but with the update we can also use let and const. Using only var caused leaky window issue, var would be able to be manipulated outside of its ideal scope. const allows a variable to always be that thing, let allows us to declare a variable that cannot be manipulated outside of the scope 


//exercise 1


function outer(){

    let a = 'outer string';
    console.log(a);
    let b = {key: 'value'};
    console.log(b); //if console.log(b.key) you get just the 'value'

    function inner(a,b) {
        
        console.log(a); 

        //undefined when parameters a,b set in inner()
        
        console.log(b);

        a = 'inner string';
        b = {innerKeyUpdated: 'inner value'}
        
    }

    inner ('argument string', {argumentKey: 'argument value'});
    console.log(a);
    console.log(b);
}

outer();

