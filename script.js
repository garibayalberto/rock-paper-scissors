let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++; 
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add('win');
  setTimeout(() => userChoice_div.classList.remove('win'), 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  
  computerScore++; 
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose!`;
  userChoice_div.classList.add('lose');
  setTimeout(() => userChoice_div.classList.remove('lose') , 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. DRAW!`;
  userChoice_div.classList.add('draw');
  setTimeout(() => userChoice_div.classList.remove('draw') , 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    default: 
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {

  //rock_div.click( () => game("r") );
  rock_div.addEventListener("click", function(){ game("r"); });

  //paper_div.click( () => game("p") );
  paper_div.addEventListener("click", function(){ game("p"); });

  //scissors_div.click( () => game("s") );
  scissors_div.addEventListener("click", function(){ game("s"); });

}

main();
