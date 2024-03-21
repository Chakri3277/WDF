let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = document.getElementById("guessInput").value;
  attempts++;

  if (guess === "") {
    alert("Please enter a number!");
    return;
  }

  guess = parseInt(guess);

  if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100!");
    return;
  }

  const message = document.getElementById("message");

  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
  } else if (guess > randomNumber) {
    message.textContent = "Your guess is too high. Try again!";
  } else {
    message.textContent = "Your guess is too low. Try again!";
  }

  document.getElementById("guessInput").value = "";
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
}
