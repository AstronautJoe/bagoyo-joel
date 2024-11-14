// script.js

// Activity: Exploring Common JS Built-in Methods

// Objective: Practice using common JS built-in methods to perform various operations.

// Instructions:
// 1. Create an HTML file with a heading that says "Common JS Built-in Methods".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using common JS built-in methods. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Calculate the square root of a given number.
//    b. Generate a random number between 1 and 10.
//    c. Convert a string representation of a number to an actual number.
//    d. Check if a value is not a number.
//    e. Convert a number to a string.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate method to accomplish the given task.

// Good luck!

// Your code implementation goes here:

// Calculate the square root of a given number
const squareRoot = Math.sqrt(2);
console.log(squareRoot.toFixed(2));

// Generate a random number between 1 and 10
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(1, 10);
console.log(randomNumber);

// Convert a string representation of a number to an actual number
const numberString = '3456';
const numberInt = parseInt(numberString);
console.log(numberInt);

// Check if a value is not a number
const randomValue = '2333';
const numberCheck = Number.isInteger(randomValue);
console.log(numberCheck); //should return false

// Convert a number to a string
const number = 233;
const stringedNumber = number.toString();
console.log('The Stringed number is now of type: ', typeof stringedNumber);
