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

let resultFromCPUComputation = document.getElementById("computerResult");
resultFromCPUComputation.textContent = "Computer result is: " + getComputerChoice();