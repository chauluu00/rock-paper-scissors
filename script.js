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

// let c2 = prompt("What is your choice?");
// function getHumanChoice (c2){
//     if(c2.toLowerCase() === "rock" || c2.toLowerCase() === "paper" || c2.toLowerCase() === "scissors"){
//         return c2.toLowerCase();
//     } else {
//         prompt("Your choice is invalid, please choose again.");
//     }
// }

// console.log(getHumanChoice(c2));
// let humanScore = 0;
// let computerScore = 0;

// function playRound (humanChoice, computerChoice){
//     computerChoice = c1.toLowerCase;
//     humanChoice = c2.toLowerCase;
//     if (computerChoice === humanChoice){
//         console.log("It's a tie!");
//     } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock"){
//         console.log("You lose! " + computerChoice + " beats " + computerChoice + ".");
//         computerScore++;
//     } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"){
//         console.log("You win!");
//         humanScore++;
//     } else {
//         console.log("Please try again.");
//     }
// }

// const humanSelection = getHumanChoice;
// const computerSelection = getComputerChoice;

// playRound(humanSelection, computerSelection);