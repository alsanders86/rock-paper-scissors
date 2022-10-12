const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');


const roundText = document.querySelector(".round-text");
const scoreText = document.querySelector(".score");
const picksText = document.querySelector(".current-round-picks")
const currentText = document.querySelector(".current-round-winner");
const finalWinnerText = document.querySelector(".winner-text");

let playerScore = 0;
let compScore = 0;
let roundCount = 0;

let gameOver = false;

// rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
// paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
// scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));

function getComputerChoice() {
    let randomNum  = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNum == 1) {
        computerChoice = "rock";
    } else if (randomNum == 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    // console.log("The player picked " + playerSelection);
    // console.log("The computer picked " + computerSelection);

    let winnerText;
    let roundPicksText = "The player picked " + playerSelection + ". \r\n" + "The computer picked " + computerSelection + ".";

    if (playerSelection == "rock") {
        if(computerSelection == "rock") {
            winnerText = "You tied the round!";
        } else if (computerSelection == "paper") {
            winnerText = "You lose the round! Paper beats rock!";
            compScore++;
            roundCount++;
        } else if (computerSelection == "scissors") {
            winnerText = "You win the round! Rock beats scissors!";
            playerScore++;
            roundCount++;
        }
    } else if (playerSelection == "paper") {
        if(computerSelection == "rock") {
            winnerText = "You win the round! Paper beats rock!";
            playerScore++;
            roundCount++;
        } else if (computerSelection == "paper") {
            winnerText = "You tied the round!";
        } else if (computerSelection == "scissors") {
            winnerText = "You lose the round! Scissors beats paper!";
            compScore++;
            roundCount++;
        }
    } else if (playerSelection == "scissors") {
        if(computerSelection == "rock") {
            winnerText = "You lose the round! Rock beats scissors!";
            compScore++;
            roundCount++;
        } else if (computerSelection == "paper") {
            winnerText = "You win the round! Scissors beats paper!";
            playerScore++;
            roundCount++;
        } else if (computerSelection == "scissors") {
            winnerText = "You tied the round!";
        }
    }

    roundText.textContent = "ROUND " + roundCount;

    currentText.textContent = winnerText;
    picksText.textContent = roundPicksText;
    scoreText.textContent = "Player has " + playerScore + " points. Computer has " + compScore + " points."

    if(playerScore == 5) {
        finalWinnerText.textContent = "You won the game! Now go outside. Press a button to play again.";
        // console.log("player won");
        gameOver = true;
        resetGame();
    } else if (compScore == 5) {
        finalWinnerText.textContent = "You lose the game! Good day sir!. Press a button to play again.";
        // console.log("computer won");
        gameOver = true;
        resetGame();
    } else {
        finalWinnerText.textContent = "";
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    roundCount = 0;
}

function playGame() {

    rockBtn.addEventListener('click', () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener('click', () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener('click', () => playRound("scissors", getComputerChoice()));

    roundText.textContent = "ROUND " + roundCount;
    console.log(playerScore + " " + compScore);

    // scoreText.textContent = "Player has " + playerScore + " points. Computer has " + compScore + " points."

    // changed amount of rounds for now
    for(let i = 0; i < 1; i++) {
        // console.log("ROUND " + (i + 1));
        // roundText.textContent = `ROUND ${i + 1}`;
        // const computerSelection = getComputerChoice();
        // const playerSelection = getPlayerChoice();

        // rockBtn.addEventListener('click', () => playRound("rock", computerSelection));
        // paperBtn.addEventListener('click', () => playRound("paper", computerSelection));
        // scissorsBtn.addEventListener('click', () => playRound("scissors", computerSelection));

        // console.log("Player has " + playerScore + " points. Computer has " + compScore + " points.")
        // scoreText.textContent = "Player has " + playerScore + " points. Computer has " + compScore + " points."
    }

    console.log("Player has " + playerScore + " points. Computer has " + compScore + " points.")
    // if (playerScore > compScore) {
    //     console.log("You won the game! Now go outside.");
    // } else if (playerScore < compScore) {
    //     console.log("You lost the game! Now go outside.")
    // } else {
    //     console.log("Well well, you tied Now go outside.");
    // }
}

playGame();