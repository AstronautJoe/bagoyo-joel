// Activity 3: Guess the Secret Number
// Open your JavaScript development environment or console.
// Declare a variable named secretNumber and assign it a random integer between 1 and 10
// Declare a variable named attempts and set it to 0. This variable will keep track of the number of attempts made by the player.
// Declare a variable named guessedNumber to store the player's guesses.
// Display a welcome message to the player using console.log().
// Start a do-while loop to repeatedly ask the player for their guess until they guess the correct number.
// Inside the loop, prompt the player to enter their guess using prompt() function and store it in the guessedNumber variable.
// Use an if statement to check if the guessedNumber is lower than the secretNumber.
// If it is lower, display the message "Too low! Try again." using console.log().
// Use an else if statement to check if the guessedNumber is higher than the secretNumber.
// If it is higher, display the message "Too high! Try again." using console.log().
// Use an else statement to handle the case when the guessedNumber matches the secretNumber.
// Display the message "Congratulations! You guessed the correct number: [secretNumber]" using console.log().
// Display the message "It took you [attempts] attempts." to let the player know how many attempts they took.
// Increment the attempts variable by 1.
// Repeat steps 7-11 until the guessedNumber matches the secretNumber.
// End the game.

//Inclusive minimum and maximum
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let secretNumber = getRandomIntInclusive(1, 10);
let attempts = 0;
let guessedNumber = null;

console.log('Hello Player and welcome!');

do {
  guessedNumber = parseInt(prompt('Guess the secret number: '));
  attempts++;
} while (guessedNumber !== secretNumber);

if (guessedNumber < secretNumber) {
  console.log('Too low! Try again.');
} else if (guessedNumber > secretNumber) {
  console.log('Too High! Try again.');
} else {
  console.log(
    'Congratulations! You guessed the correct number: ' + guessedNumber
  );
  console.log('It took you ' + attempts + 'attempts');
  console.log('Game End');
}
