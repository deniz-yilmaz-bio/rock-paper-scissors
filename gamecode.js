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
  }
}
