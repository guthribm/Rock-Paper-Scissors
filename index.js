// My getter function
function get(id) {
  return document.getElementById(id);
}

let gameContainer = get("game-container");

// Score total
let scoreTotal = get("score");
let playerScore = 0;

// Selections page
let selectionsPage = get("selections-board");
let user = get("user");
let house = get("house");
let houseSelection = get("house-selection");
let userSelection = get("user-selection");

// Rules Page and button
let rulesContainer = get("rules-container");
let rulesBtn = get("rules");
let rulesCloseBtn = get("rules-close-btn");

// Grabs game board for display changes
let gameBoard = document.querySelector(".game-board");

// Rock, Paper and Scissors buttons
let rock = get("rock");
let paper = get("paper");
let scissors = get("scissors");

// Displays who won the game
let winnerDisplay = get("winner");
let results = get("results");

// Replay button
let replayBtn = get("replay");

// function adds highlight to winner
function addHighlight(selection) {
  let choices = document.querySelectorAll(".selections-board-btn");

  choices.forEach((button) => {
    if (button.classList.contains(selection)) {
      button.classList.add("winner");
      console.log(`added winner class to button: ${button.id}`);
    } else {
      console.log(
        `highlights fucked up: buttonid- ${button.id} selection- ${selection} classList- ${button.classList}`
      );
    }
  });
}

// Randomly chooses move from array and returns value
function computerChoose() {
  let array = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * array.length);
  let choice = array[index];
  console.log(`computerChoose() returns ${choice}`);
  return choice;
}

function determineWinner(player, computer) {
  let winnerText = "";
  console.log(`sending into determin winner: ${player} ${computer}`);
  if (player === computer) {
    console.log(`${player} same as ${computer}`);
    winnerText = "TIE";
  } else if (player == "rock" && computer == "scissors") {
    console.log("r beats s");
    winnerText = "YOU WIN";
    addHighlight(player);
    playerScore++;
  } else if (player == "rock" && computer == "paper") {
    console.log("r loses p");
    winnerText = "YOU LOSE";
    addHighlight(computer);
  } else if (player == "paper" && computer == "rock") {
    console.log("p beats r");
    winnerText = "YOU WIN";
    addHighlight(player);
    playerScore++;
  } else if (player == "paper" && computer == "scissors") {
    console.log("p loses s");
    winnerText = "YOU LOSE";
    addHighlight(computer);
  } else if (player == "scissors" && computer == "paper") {
    console.log("s beats p");
    winnerText = "YOU WIN";
    addHighlight(player);
    playerScore++;
  } else if (player == "scissors" && computer == "rock") {
    console.log("s loses r");
    winnerText = "YOU LOSE";
    addHighlight(computer);
  } else {
    console.log("something fucked up");
  }

  console.log(
    `coming out of determine winner function - player: ${player} computer: ${computer}`
  );
  console.log("winner" + winnerText);
  winnerDisplay.textContent = winnerText;
}

// Changes board to show selections screen
function handleChoice(event) {
  let player = `${event.target.id}`;
  gameBoard.style.display = "none";
  selectionsPage.style.display = "grid";
  userSelection.classList.add(event.target.id);

  // gets selection from computer and assigns to variable
  let computer = computerChoose();
  // determineWinner(player, computer);
  setTimeout(() => {
    determineWinner(player, computer);
  }, 1000);
  setTimeout(() => {
    houseSelection.classList.remove("blank-selection");
    houseSelection.classList.add(computer);
  }, 700);
  setTimeout(() => {
    winnerDisplay.style.display = "block";
    replayBtn.style.display = "block";
    scoreTotal.textContent = playerScore;
  }, 1500);

  console.log(
    `handleChoiceFunction sending to determineWinner(${player}, ${computer})`
  );

  console.log("handleChoiceFunction computer chooses: " + computer);
  console.log("handleChoiceFunction user chooses: " + event.target.id);
}

// function closes game page and opens rules page
function rulesHandler() {
  gameContainer.style.display = "none";
  rulesContainer.style.display = "flex";
}

// function closes rules page and opens game page
function closeRulesHandler() {
  gameContainer.style.display = "flex";
  rulesContainer.style.display = "none";
}

// function handles play again button press by reseting board
function playAgainHandler() {
  selectionsPage.style.display = "none";
  // results.style.display = "none";
  winnerDisplay.style.display = "none";
  replayBtn.style.display = "none";
  gameBoard.style.display = "grid";
  userSelection.classList.remove("rock");
  userSelection.classList.remove("scissors");
  userSelection.classList.remove("paper");
  houseSelection.classList.remove("rock");
  houseSelection.classList.remove("scissors");
  houseSelection.classList.remove("paper");
  userSelection.classList.remove("winner");
  houseSelection.classList.remove("winner");
  houseSelection.classList.add("blank-selection");
  console.log("should have removed all classes");
}

// Opens and closes rules page
rulesBtn.addEventListener("click", rulesHandler);
rulesCloseBtn.addEventListener("click", closeRulesHandler);

// RPS button event listeners
rock.addEventListener("click", handleChoice);
paper.addEventListener("click", handleChoice);
scissors.addEventListener("click", handleChoice);

// Play again event listener
replayBtn.addEventListener("click", playAgainHandler);
