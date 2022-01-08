let computerPlay = () => {
  let playOptions = ["Rock", "Paper", "Scissors"];
  return playOptions[Math.floor(Math.random() * 3)];
};

let playRound = (move) => {
  move.toLowerCase();
  let computerMove = computerPlay().toLowerCase();
  let result =
    move == computerMove
      ? 0
      : (move == "rock" && computerMove == "scissors") ||
        (move == "paper" && computerMove == "rock") ||
        (move == "scissors" && computerMove == "paper")
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
