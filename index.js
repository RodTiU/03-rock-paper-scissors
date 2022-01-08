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
  return winner + ". Rival moves " + computerMove.toUpperCase();
};

let game = () => {
  let scoreHuman = 0,
    scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = String(prompt("Choose Rock, Paper or Scissors:"));
    let gameRound = playRound(playerSelection);
    scoreHuman = gameRound.match(/human/i) != null ? ++scoreHuman : scoreHuman;
    scoreComputer =
      gameRound.match(/computer/i) != null ? ++scoreComputer : scoreComputer;
    console.log(gameRound);
  }
  let finalScore =
    scoreHuman > scoreComputer
      ? `Human Wins ${scoreHuman}-${scoreComputer}`
      : scoreHuman < scoreComputer
      ? `Computer Wins ${scoreComputer}-${scoreHuman}`
      : `It's a Tie to ${scoreHuman}`;
  return finalScore;
};
