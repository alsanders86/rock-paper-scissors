let playerSelection = "rock";

function getComputerChoice() {
    let randomNum  = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNum == 1) {
        computerChoice = "Rock";
    } else if (randomNum == 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors";
    }

    // console.log(computerChoice);
    return computerChoice;
}


function getPlayerChoice() {

}

function playRound(playerSelection, computerSelection) {
    console.log("the player picked " + playerSelection);
    console.log("the computer picked " + computerSelection.toLowerCase());

    let playerPick = playerSelection.toLowerCase();
    let compPick = computerSelection.toLowerCase();
    let winnerText;

    if (playerPick == "rock") {
        if(compPick == "rock") {
            winnerText = "you tied!";
        } else if (compPick == "paper") {
            winnerText = "you lose! paper beats rock";
        } else if (compPick == "scissors") {
            winnerText = "you win! rock beats scissors";
        }
    } else if (playerPick == "paper") {
        if(compPick == "rock") {
            winnerText = "you win! paper beats rock";
        } else if (compPick == "paper") {
            winnerText = "you tied!";
        } else if (compPick == "scissors") {
            winnerText = "you lose! scissors beats paper";
        }
    } else if (playerPick == "scissors") {
        if(compPick == "rock") {
            winnerText = "you lose! rock beats scissors";
        } else if (compPick == "paper") {
            winnerText = "you win! scissors beats paper";
        } else if (compPick == "scissors") {
            winnerText = "you tied!";
        }
    }

    return winnerText;
}

function playGame() {
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let userInput = prompt("Choose Rock Paper or Scissors");

        userInput = userInput.toLowerCase();
        if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
            playerSelection = userInput;
        } else {
            userInput = prompt("Invalid input! Choose ONLY Rock Paper or Scissors!")
        }
            
        let winner = playRound(playerSelection, computerSelection);
        if (winner.includes("win")) {
            console.log("wow you won a round, neat");
            playerScore++;
        } else if (winner.includes("lose")) {
            console.log("ha you lost a round");
            compScore++;
        } else {
            console.log("yall tied a round. no points for either of you");
        }
        console.log("player has " + playerScore + " points. computer has " + compScore + " points.")
    }

    if (playerScore > compScore) {
        console.log("you won the game!");
    } else if (playerScore < compScore) {
        console.log("you lost the game!")
    } else {
        console.log("well well, you tied");
    }
}

playGame();
// console.log(playRound(playerSelection, computerSelection));