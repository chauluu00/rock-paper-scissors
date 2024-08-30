function getComputerChoice (){
    const randomNumber = Math.random();
    if (randomNumber < 1/3){
        return "rock";
    } else if (randomNumber < 2/3){
        return "paper";
    } else {
        return "scissors";
    }
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

//const prompt=require("prompt-sync")({sigint:true});
function getHumanChoice (){
    const humanChoice = prompt("What is your choice?");
    if(humanChoice !== null && humanChoice !== ""){
        return humanChoice.toLowerCase();
    } else {
        return "";
    }
}
const humanChoice = getHumanChoice();
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    if (computerChoice === humanChoice){
        console.log("It's a tie!");
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock"){
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win!");
        humanScore++;
    } else {
        console.log("Please try again.");
    }
}

playRound(humanChoice, computerChoice);
console.log(computerScore);
console.log(humanScore);