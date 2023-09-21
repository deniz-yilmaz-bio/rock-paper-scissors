function getComputerChoice() {
  let choiceArray = ["Rock", "Paper", "Scissors"];

  let randomNumber = Math.floor(Math.random() * choiceArray.length);

  return choiceArray[randomNumber];
}

function playRound(userChoice, computerChoice) {
  computerChoice = getComputerChoice();
  userChoice = prompt("Make your choice:");

  if (userChoice.toLowerCase() == "rock") {
    if (computerChoice === "Paper") {
      return "You lose! " + computerChoice + " beats Rock!";
    } else if (computerChoice == "Scissors") {
      return "You win! Rock beats " + computerChoice;
    } else {
      return "It's a draw!";
    }
  } else if (userChoice.toLowerCase() == "paper") {
    if (computerChoice === "Scissors") {
      return "You lose! " + computerChoice + " beats Paper!";
    } else if (computerChoice == "Rock") {
      return "You win! Paper beats " + computerChoice;
    } else {
      return "It's a draw!";
    }
  } else if (userChoice.toLowerCase() == "scissors") {
    if (computerChoice === "Rock") {
      return "You lose! " + computerChoice + " beats Scissors!";
    } else if (computerChoice == "Paper") {
      return "You win! Scissors beats " + computerChoice;
    } else {
      return "It's a draw!";
    }
  } else {
    return "Invalid Choice.";
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound();
    console.log(result);
    if (result.includes("win")) {
      userScore += 1;
    } else if (result.includes("lose")) {
      computerScore += 1;
    }
    console.log("You: " + userScore + "       Computer: " + computerScore);
  }
  if (computerScore > userScore) {
    return "You lose today!";
  } else if (computerScore < userScore) {
    return "You win today!";
  } else {
    return "There are no winners today.";
  }
}
