const MIN_RANDOM = 0;
const MAX_RANDOM = 3;

let getComputerChoice = () => {
    return Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM);
}

