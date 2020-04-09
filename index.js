//Initial Initializations
var win = 0;
var draw = 0;
var lost = 0;
initial();

//Stone button click event handler
document.querySelector(".s").addEventListener("click", () => {
  calculate(0);
});

//Paper button click event handler
document.querySelector(".p").addEventListener("click", () => {
  calculate(1);
});

//Scissor button click event handler
document.querySelector(".c").addEventListener("click", () => {
  calculate(2);
});

//Reset Button click event handler
document.querySelector("#reset").addEventListener("click", reset);

//Win Lose Draw Logic
calculate = (userInput) => {
  //Calculating computers output
  let computerInput = Math.floor(Math.random() * 3);

  //Unhiding the Result and Computer choice area
  document.querySelector(".results").style.display = "flex";
  document.querySelector(".computer").style.display = "block";

  //user stone and computer paper
  if (userInput === 0 && computerInput === 1) {
    document.querySelector("#computer-choice").innerHTML = "PAPER";
    lostPreset();
  }
  //user stone and computer scissors
  else if (userInput === 0 && computerInput === 2) {
    document.querySelector("#computer-choice").innerHTML = "SCISSORS";
    winPreset();
  }
  //user stone and computer stone
  else if (userInput === 0 && computerInput === 0) {
    document.querySelector("#computer-choice").innerHTML = "STONE";
    drawPreset();
  }
  //user paper and computer paper
  else if (userInput === 1 && computerInput === 1) {
    document.querySelector("#computer-choice").innerHTML = "PAPER";
    drawPreset();
  }
  //user paper and computer scissors
  else if (userInput === 1 && computerInput === 2) {
    document.querySelector("#computer-choice").innerHTML = "SCISSORS";
    lostPreset();
  }
  //user paper and computer stone
  else if (userInput === 1 && computerInput === 0) {
    document.querySelector("#computer-choice").innerHTML = "STONE";
    winPreset();
  }
  //user scissors and computer paper
  else if (userInput === 2 && computerInput === 1) {
    document.querySelector("#computer-choice").innerHTML = "PAPER";
    winPreset();
  }
  //user scissors and computer scissors
  else if (userInput === 2 && computerInput === 2) {
    document.querySelector("#computer-choice").innerHTML = "SCISSORS";
    drawPreset();
  }
  //user scissors and computer stone
  else if (userInput === 2 && computerInput === 0) {
    document.querySelector("#computer-choice").innerHTML = "STONE";
    lostPreset();
  }
};

//Conditions during win
function winPreset() {
  win++;
  document.querySelector("#win").innerHTML = win;
  document.documentElement.style.setProperty("--result", "green");
  document.querySelector(
    ".results"
  ).innerHTML = `<div>You Won <i class="fas fa-thumbs-up"></i></div>`;
  document.querySelector("#computer-choice").style.color = "red";
}

//Conditions during draw
function drawPreset() {
  draw++;
  document.querySelector("#draw").innerHTML = draw;
  document.documentElement.style.setProperty("--result", "orange");
  document.querySelector(
    ".results"
  ).innerHTML = `<div>Draw <i class="fas fa-handshake"></i></div>`;
  document.querySelector("#computer-choice").style.color = "orange";
}

//Conditions during lost
function lostPreset() {
  lost++;
  document.querySelector("#lost").innerHTML = lost;
  document.documentElement.style.setProperty("--result", "red");
  document.querySelector(
    ".results"
  ).innerHTML = `<div>You Lost <i class="fas fa-thumbs-up"></i></div>`;
  document.querySelector("#computer-choice").style.color = "green";
}

//Reset Function
function reset() {
  win = 0;
  lost = 0;
  draw = 0;
  initial();
}

//Initialization function
function initial() {
  document.querySelector(".results").style.display = "none";
  document.querySelector(".computer").style.display = "none";
  document.querySelector("#win").innerHTML = win;
  document.querySelector("#draw").innerHTML = draw;
  document.querySelector("#lost").innerHTML = lost;

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.className = "dark";
  } else {
    document.documentElement.className = "light";
  }
}

//Theme Code
document.querySelector("#theme-switch").addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.className = "light";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.className = "dark";
    localStorage.setItem("theme", "dark");
  }
});
