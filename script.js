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

function getHumanChoice (){
    const humanChoice = prompt("What is your choice?");
    if(humanChoice !== null && humanChoice !==""){
        return humanChoice.toLowerCase();
    } else {
        return "";
    }
}

function playGame (){
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice){
        if (computerChoice === humanChoice){
            console.log(`You threw ${humanChoice} and the computer threw ${computerChoice}. It's a tie!`);
        } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock"){
            console.log(`You threw ${humanChoice} and the computer threw ${computerChoice}. You lose!`);
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"){
            console.log(`You threw ${humanChoice} and the computer threw ${computerChoice}. You win!`);
            humanScore++;
        } else {
            console.log("Your choice is invalid. Please try again.");
            getHumanChoice();
        }
    }
    //play 5 rounds
    for (let i=1; i < 6; i++){
    console.log("Round " + i);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current score - Human: ${humanScore}, Computer: ${computerScore}.`);
    }
    
    //Announce winner
    if (humanScore > computerScore){
        console.log(`The score is ${humanScore} - ${computerScore}. You won the game!`);
    } else if (humanScore < computerScore){
        console.log(`The score is ${humanScore} - ${computerScore}. You lost the game!`);
    } else {
        console.log(`The score is ${humanScore} - ${computerScore}. It's a tie!`);
    }
}

playGame();