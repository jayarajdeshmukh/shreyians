let correctNumber = 7; // You can change this
let guess;

while (guess != correctNumber) {
  guess = prompt("Guess a number between 1 and 10:");

  if (guess == correctNumber) {
    console.log("🎉 Correct! You guessed the number.");
  } else {
    console.log("❌ Wrong guess, try again!");
  }
}

