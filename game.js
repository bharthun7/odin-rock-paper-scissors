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
function playGame() {
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
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  if (humanScore === computerScore) {
    console.log(
      `It's a tie! Final scores:\n  Player: ${humanScore}\n  Computer: ${computerScore}\n  Ties: ${
        5 - humanScore - computerScore
      }`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `Player wins! Final scores:\n  Player: ${humanScore}\n  Computer: ${computerScore}\n  Ties: ${
        5 - humanScore - computerScore
      }`
    );
  } else {
    console.log(
      `Computer wins! Final scores:\n  Player: ${humanScore}\n  Computer: ${computerScore}\n  Ties: ${
        5 - humanScore - computerScore
      }`
    );
  }
}
playGame();
