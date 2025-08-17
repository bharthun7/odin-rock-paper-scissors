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
  let msg = document.querySelector(".message");
  if (humanChoice === computerChoice) {
    msg.textContent = `It's a tie! Both picked ${humanChoice}!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    msg.textContent = `Player wins! ${
      humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}!`;
    humanScore++;
  } else {
    msg.textContent = `Computer wins! ${
      computerChoice.at(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}!`;
    computerScore++;
  }
  document.querySelector(".player").textContent = `Player Score: ${humanScore}`;
  document.querySelector(
    ".computer"
  ).textContent = `Computer Score: ${computerScore}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
  /*
  if(computerScore+humanScore+ties==5){
    gameOver=true;
    if 
  }
    */
}
let humanScore = 0;
let computerScore = 0;
let ties = 0;
let btns = document.querySelector(".buttons");
let gameOver = false;
btns.addEventListener("click", (e) => {
  if (!gameOver) {
    playRound(e.target.className, getComputerChoice());
  }
});
