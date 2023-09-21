function getComputerChoice() {
  let choiceArray = ["Rock", "Paper", "Scissors"];

  let randomNumber = Math.floor(Math.random() * choiceArray.length);

  return choiceArray[randomNumber];
}
