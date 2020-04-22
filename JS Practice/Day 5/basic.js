//higher order functions

function add (num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num2 - num1;
}

function multiply(num1,num2) {
    return num1 * num2
}

function divide(num1,num2) {
    return num1 / num2
}

function doMath(operation, number1, number2) {
    return operation(number1,number2)
}

console.log(doMath(add,1,4));
console.log(doMath(subtract,4,8));
console.log(doMath(multiply,3,12));
console.log(doMath(divide,12,6));



//map example

var students = [
    {firstName: 'Cam', lastName: 'Newton'},
    {firstName: 'Ted', lastName: 'Ginn'},
    {firstName: 'Greg', lastName: 'Olsen'}
]

var fullNames = students.map(function(a){
    return a.firstName + ' ' + a.lastName;
});

//THIS is what it means when someone says "iterate over" something
//prints out names on different lines in terminal
for (let i=0; i<fullNames.length; i++) {
    console.log(fullNames[i]);
}

//same thing without for loop
console.log(fullNames.join('\r\n'))



//reduce functions

var students = [
    {name: 'Cam Newton', assignmentsCompleted: 6},
    {name: 'Ted Ginn', assignmentsCompleted: 10},
    {name: 'Greg Olsen', assignmentsCompleted: 8}
]

var totalAssignments = students.reduce(function(sum,current){
    return sum + current.assignmentsCompleted;
}, 0);

totalAssignments === 24;

console.log(totalAssignments);




//exercise 1

let superHeros = [
    ["Batman", "Bruce Wayne"], 
    ["Spiderman", "Peter Parker"], 
    ["The Flash", "Barry Allen"]
    ]

let secretIdentity = superHeros.map(function(revealArray){
    // return revealArray.toString();
    return revealArray.join ("'s real identity is "); //returns as string
    //         //Stringifying
    // teachers = ['Assaf', 'Shane'];
    // teachers.toString(); 'Assaf,Shane';
    // teachers.join('&'); 'Assaf&Shane';
    console.log(revealArray);
})

console.log(secretIdentity.join('\n'));




//exercise 2

let players = [
    {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

//find mike

let findMike = players.find(function(a){
    return a.firstName === 'Mike';
})

console.log(findMike);


//get array of all players with position 'RB'

let filterRunningBacks = players.filter(function(a){
    return a.position === 'RB';
})

console.log(filterRunningBacks);


//get array of all the players last names

let mapLastNames = players.map(function(a) {
    return a.lastName ;
})

console.log(mapLastNames);


//get array of full names of players with more than 5 touch downs

let findAllStars = players.filter(function(a){
    return a.touchdowns > 5 && a.position === 'RB';})
    .map(function(a){
        return a.firstName + ' ' + a.lastName
    })

console.log(findAllStars);


//get number of touch downs scored by Running Backs

let findRBtdScores = 
    players
    .filter(function(a){
        return a.position === 'RB';
    })
    .reduce(function(total, b){
        return total += b.touchdowns;
    },0)

console.log(findRBtdScores);


