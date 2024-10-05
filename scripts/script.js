const MIN_RANDOM = 0;
const MAX_RANDOM = 3;

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
    console.log("Second time?");
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


let resultFromCPUComputation = document.getElementById("computerResult");
resultFromCPUComputation.textContent = "Computer result is: " + getComputerChoice();