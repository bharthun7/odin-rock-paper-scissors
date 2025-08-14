function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  return prompt("Pick rock, paper, or scissors: ");
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both picked ${humanChoice}!`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`Player wins! ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
  } else {
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  }
}
