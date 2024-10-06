const MIN_RANDOM = 0;
const MAX_RANDOM = 3;
const ROUND_LIMIT = 5;

let humanScore = 0;
let cpuScore = 0;

let getComputerChoice = () => {
    let intermediateRslt = Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM);
    let result;
    switch(intermediateRslt) {
        case 0: 
            result = "rock";
            break;
        case 1: 
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;
}


/**
 * 
 * @returns humanChoice
 */
let getHumanChoice = () => {
    let humanPrompt = prompt("What is your guess?");
    let humanChoice;
    switch(humanPrompt) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
        default:
            alert("Please enter a valid value! \n Valid values are: rock, paper, scissors.");
            getHumanChoice();
            break;
    }    
    return humanChoice;
} // Still has a bug if we choose a different input than the accepted ones.


function playRound(humanChoice, cpuChoice) {
    if(humanChoice === cpuChoice) {
        console.log("It's a tie!");
        humanScore++;
        cpuScore++;
    } else if(humanChoice === "rock" && cpuChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        cpuScore++;
    } else if(humanChoice === "paper" && cpuChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        cpuScore++;
    } else if(humanChoice === "scissors" && cpuChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if(humanChoice === "rock" && cpuChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if(humanChoice === "paper" && cpuChoice === "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if(humanChoice === "scissors" && cpuChoice === "rock") {
        console.log("You lose! Scissors beats rock.");
        cpuScore++;
    } 
}


function playGame() {
    let currentRound = 0;
    while(currentRound < ROUND_LIMIT) {
        const humanSelection = getHumanChoice();
        const cpuSelection = getComputerChoice();
        playRound(humanSelection, cpuSelection);
        currentRound++;
    }
    if(cpuScore > humanScore) {
        console.log("You lost!");
    } else {
        console.log("You win!");
    }
}

let btnStartGame = document.getElementById("startGame");
btnStartGame.addEventListener("click", () => {
    playGame();
});
