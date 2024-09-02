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

let choice = document.querySelector("#choice");
choice.addEventListener("click", (event) => {
    let target = event.target;
    let humanChoice;
    switch(target.id){
        case "rock":
            humanChoice = "rock";
            playRound(humanChoice, getComputerChoice());
            break;
        case "paper":
            humanChoice = "paper";
            playRound(humanChoice, getComputerChoice());
            break;
        case "scissors":  
            humanChoice = "scissors";
            playRound(humanChoice, getComputerChoice());
            break;
    }
});

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){
    let result = document.querySelector("#result");
    if (computerChoice === humanChoice){
        result.textContent = ""; //Clear result div after each round
        const msg = document.createElement("p");
        msg.textContent = `You threw ${humanChoice}, the computer threw ${computerChoice}. It's a tie!`;
        const score = document.createElement("p");
        score.textContent = `Current score - Human: ${humanScore}, Computer: ${computerScore}.`;
        result.appendChild(msg);
        result.appendChild(score);
    } else if (computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        result.textContent = "";
        const msg = document.createElement("p");
        msg.textContent = `You threw ${humanChoice}, the computer threw ${computerChoice}. You lose!`;
        const score = document.createElement("p");
        score.textContent = `Current score - Human: ${humanScore}, Computer: ${computerScore}.`;
        result.appendChild(msg);
        result.appendChild(score);
    } else {
        humanScore++;
        result.textContent = "";
        const msg = document.createElement("p");
        msg.textContent = `You threw ${humanChoice}, the computer threw ${computerChoice}. You win!`;
        const score = document.createElement("p");
        score.textContent = `Current score - Human: ${humanScore}, Computer: ${computerScore}.`;
        result.appendChild(msg);
        result.appendChild(score);
    }
    //Announce winner and restart game
    if (humanScore === 5){
        alert(`The score is ${humanScore} - ${computerScore}. You won the game!`);
        resetGame();
    } else if (computerScore === 5) {
        alert(`The score is ${humanScore} - ${computerScore}. You lost the game!`);
        resetGame();
    } else {
        //If no player got to 5 points yet, keep playing the game
    }
    //Function to reset game
    function resetGame(){
        humanScore = 0;
        computerScore = 0;
        result.textContent = "";
    }
}