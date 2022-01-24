// Logic functions
const playComputer = () => {
  let playOptions = ["Rock", "Paper", "Scissors"];
  return playOptions[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection) => {
  playerSelection.toLowerCase();
  let computerMove = playComputer().toLowerCase();
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
  return winner + ". Rival moves " + computerMove.toLowerCase();
};

const startGame = (playerSelection) => {
  let scoreRoundHuman = 0,
    scoreRoundComputer = 0;
  let gameRound = playRound(playerSelection);
  scoreRoundHuman =
    gameRound.match(/human/i) != null ? ++scoreRoundHuman : scoreRoundHuman;
  scoreRoundComputer =
    gameRound.match(/computer/i) != null
      ? ++scoreRoundComputer
      : scoreRoundComputer;
  return { gameRound, scoreRoundHuman, scoreRoundComputer };
};

// DOM interaction

let scorePreviewCounter = [0, 0];
const selectedButton = (e) => {
  const selectionButton = document.querySelector(
    `button[class='${e.target.className}']`
  );
  const score = document.querySelector("p[class='score']");
  const roundResults = document.querySelector("p[class='round']");
  const finalScore = document.querySelector("p[class='finalScore']");
  if (!selectionButton) return;
  const game = startGame(selectionButton.className);
  selectionButton.classList.add("click");
  if (scorePreviewCounter[0] < 5 && scorePreviewCounter[1] < 5) {
    scorePreviewCounter[0] += game.scoreRoundHuman;
    scorePreviewCounter[1] += game.scoreRoundComputer;
    score.innerHTML = `Human: ${scorePreviewCounter[0]}<br>Computer: ${scorePreviewCounter[1]}`;
    roundResults.innerHTML = `${game.gameRound}`;
    if (scorePreviewCounter[0] === 5 || scorePreviewCounter[1] === 5) {
      finalScore.innerHTML =
        scorePreviewCounter[0] > scorePreviewCounter[1]
          ? "Human wins the game"
          : "Computer wins the game";
    }
  } else return;
};

const removeTranstion = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("click");
};

const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("transitionend", removeTranstion);
});

const restartButton = document.querySelector(".reset button");
restartButton.addEventListener("click", () => {
  window.location.reload();
});

window.addEventListener("click", selectedButton);
