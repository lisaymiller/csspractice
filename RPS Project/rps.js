

function startGame() {
    var txt;
    var userChoice = prompt("Rock, paper, or scissors?");
  if (choice == null || choice == "") {
    txt = "User was weak, and did not choose!";
  } else {
    txt = "You chose" + person + "!";
  }
  document.getElementById("demo").innerHTML = txt;
}


let hands = ['rock', 'paper', 'scissors']

let player1Win=0
let player2Win=0

var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "ROCK";
}else if(computerChoice <=0.67){
    computerChoice = "PAPER";
}
else{
    computerChoice = "SCISSORS";
}



var compare = function() {
    if (player1.hand == player2.hand) {
        return player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + "It's a tie!";

    }

    if (player1.hand == 'paper') {
        if (player2.hand == 'rock'){
        return player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player1.name + " wins!";
        } else {
            return player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player2.name + " wins!"
        }

    } 

    if (player1.hand == 'scissors') {
        if (player2.hand == 'paper'){
        return player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player1.name + " wins!";
        } else {
            return player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player2.name + " wins!"
        }

    } 

    if (player1.hand == 'rock') {
        if (player2.hand == 'scissors'){
        return player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player1.name + " wins!";
        } else {
            return player1.name + " played " + player1.hand + " and " + player2.name + " played " + player2.hand + ". " + player2.name + " wins!"
        }

    } 


}


playGame function

function playGame(player1, player2, playUntil){
    while(player1Win < playUntil && player2Win < playUntil){
        var result = playRound(player1, player2);
        if(result===player1.name){
            return player1Win++;
            break;
        }
        else if(result===player2.name){
            return player2Win++;
            break;
        }
        else{
            break;
        }
    }
}

playGame(player1, player2, 2);

console.log(playRound(player1.hand,player2.hand));

