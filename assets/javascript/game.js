



var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];



function update() {
  document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar.join(", ");

 };

 function reset() {
  guessesLeft = 9;
  guessesSoFar =[];
};

document.onkeyup = function(event) {
  guessesLeft--;
 var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 guessesSoFar.push(userGuess);
 update();
 // I tried several methods that I researched and was unable to come up with a function/if statement to exclude non alphabetic keyboard events


 computerGuess = choices[Math.floor(Math.random() * choices.length)];


   if (guessesLeft > 0){
   if (userGuess == computerGuess){
        wins++;
        reset();
        }


  }else if (guessesLeft == 0){
            losses++;
            reset();
         }
  if (guessesLeft < 0) {
    reset();
  }


    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
 
};
