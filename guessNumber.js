let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//document.querySelector("#guess").textContent = '?';

document.querySelector("#check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#input").value);
  //console.log(typeof guess);
  //console.log(guess);
  if (!guess) {
    document.querySelector("#showContent").textContent = "No Number";
  } else if (guess === secretNumber) {
    document.querySelector("#showContent").textContent = "Correcr Number...";
    document.querySelector("#guess").textContent = secretNumber;
    document.querySelector("#score1").textContent = score;
    document.querySelector("#main").style.backgroundColor = "#60b347";
    document.querySelector("#guess").style.width = "150px";
    if (score > highScore) {
      highScore = score;
      document.querySelector("#highScore1").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector("#showContent").textContent = "Too High...";
      score--;
      document.querySelector("#score1").textContent = score;
    } else {
      document.querySelector("#showContent").textContent = "You lost the game";
      document.querySelector("#score1").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector("#showContent").textContent = "Too Low...";
      score--;
      document.querySelector("#score1").textContent = score;
    } else {
      document.querySelector("#showContent").textContent = "You lost the game";
      document.querySelector("#score1").textContent = 0;
    }
  }
});
// play again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector("#showContent").textContent = "Start guessing...";
  document.querySelector("#score1").textContent = score;
  document.querySelector("#guess").textContent = "?";
  document.querySelector("#input").value = "";
  document.querySelector("#main").style.backgroundColor = "#00FFFF";
});
