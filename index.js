let computerPlay = () => {
  let playOptions = ["Rock", "Paper", "Scissors"];
  return playOptions[Math.floor(Math.random() * 3)];
};

let playRound = (playerSelection) => {
  playerSelection.toLowerCase();
  let computerMove = computerPlay().toLowerCase();
  let result =
    playerSelection == computerMove
      ? 0
      : (playerSelection == "rock" && computerMove == "scissors") ||
        (playerSelection == "paper" && computerMove == "rock") ||
        (playerSelection == "scissors" && computerMove == "paper")
      ? 1
      : -1;
  let winner =
    result == 0
      ? "This is a Tie"
      : result == 1
      ? "Human Wins"
      : "Computer Wins";
  return winner + `. Computer move was ${computerMove.toUpperCase()}`;
};
