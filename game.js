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

    return computerChoice;
}

function getPlayerChoice() {
    // get user input the first time
    let userInput = prompt("Choose Rock Paper or Scissors");
    userInput = userInput.trim().toLowerCase();
    
    // if invalid input, keep asking for proper input
    while (!(userInput == "rock" || userInput == "paper" || userInput == "scissors")) {
        userInput = prompt("Invalid input! ONLY Choose Rock Paper or Scissors");
        userInput = userInput.trim().toLowerCase();
    }

    return userInput;
}

function playRound(playerSelection, computerSelection) {
    console.log("The player picked " + playerSelection);
    console.log("The computer picked " + computerSelection.toLowerCase());

    let playerPick = playerSelection.toLowerCase();
    let compPick = computerSelection.toLowerCase();
    let winnerText;

    if (playerPick == "rock") {
        if(compPick == "rock") {
            winnerText = "You tied!";
        } else if (compPick == "paper") {
            winnerText = "You lose! Paper beats rock!";
        } else if (compPick == "scissors") {
            winnerText = "You win! Rock beats scissors!";
        }
    } else if (playerPick == "paper") {
        if(compPick == "rock") {
            winnerText = "You win! Paper beats rock!";
        } else if (compPick == "paper") {
            winnerText = "You tied!";
        } else if (compPick == "scissors") {
            winnerText = "You lose! Scissors beats paper!";
        }
    } else if (playerPick == "scissors") {
        if(compPick == "rock") {
            winnerText = "You lose! Rock beats scissors!";
        } else if (compPick == "paper") {
            winnerText = "You win! Scissors beats paper!";
        } else if (compPick == "scissors") {
            winnerText = "You tied!";
        }
    }

    return winnerText;
}

function playGame() {
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1));
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        let winner = playRound(playerSelection, computerSelection);
        if (winner.includes("win")) {
            console.log(winner);
            playerScore++;
        } else if (winner.includes("lose")) {
            console.log(winner);
            compScore++;
        } else {
            console.log(winner);
        }
        console.log("Player has " + playerScore + " points. Computer has " + compScore + " points.")
    }

    if (playerScore > compScore) {
        console.log("You won the game! Now go outside.");
    } else if (playerScore < compScore) {
        console.log("You lost the game! Now go outside.")
    } else {
        console.log("Well well, you tied Now go outside.");
    }
}

playGame();