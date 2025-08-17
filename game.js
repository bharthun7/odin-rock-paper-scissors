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
function playRound(humanChoice, computerChoice) {
  let msg=document.querySelector(".message");
  if (humanChoice === computerChoice) {
    msg.textContent=`It's a tie! Both picked ${humanChoice}!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    msg.textContent=
      `Player wins! ${
        humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}!`
    ;
    humanScore++;
  } else {
    msg.textContent=
      `Computer wins! ${
        computerChoice.at(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}!`
    ;
    computerScore++;
  }
}
let humanScore = 0;
let computerScore = 0;
let ties = 0;
let btns = document.querySelector(".buttons");
btns.addEventListener("click", (e) => {
  playRound(e.target.className, getComputerChoice());
});

/*
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
  */

//playGame();
