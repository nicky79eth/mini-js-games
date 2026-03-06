const secretNumber = Math.floor(Math.random()*100)+1;

function checkGuess(){

let guess = document.getElementById("guessInput").value;

if(guess == secretNumber){

document.getElementById("result").innerText = "Correct!";

}
else if(guess > secretNumber){

document.getElementById("result").innerText = "Too high!";

}
else{

document.getElementById("result").innerText = "Too low!";

}

}
