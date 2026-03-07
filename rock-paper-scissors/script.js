function play(userChoice){

const choices = ["rock","paper","scissors"];

const computerChoice =
choices[Math.floor(Math.random()*3)];

let result="";

if(userChoice === computerChoice){

result="Draw";

}
else if(
(userChoice==="rock" && computerChoice==="scissors") ||
(userChoice==="paper" && computerChoice==="rock") ||
(userChoice==="scissors" && computerChoice==="paper")
){

result="You win!";

}
else{

result="Computer wins!";

}

document.getElementById("result").innerText =
"You: "+userChoice+" | Computer: "+computerChoice+" → "+result;

}
