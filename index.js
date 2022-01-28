function get(id) {
  return document.getElementById(id);
}

let gameContainer = get("game-container");
let rulesBtn = get("rules");
let rulesContainer = get("rules-container");
let rulesCloseBtn = get("rules-close-btn");

let buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) =>
    console.log(`button ${event.target.id} was clicked`)
  )
);

function rulesHandler() {
  gameContainer.style.display = "none";
  rulesContainer.style.display = "flex";
}

function closeRulesHandler() {
  gameContainer.style.display = "flex";
  rulesContainer.style.display = "none";
}

rulesBtn.addEventListener("click", rulesHandler);
rulesCloseBtn.addEventListener("click", closeRulesHandler);
