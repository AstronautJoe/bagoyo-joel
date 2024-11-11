// script.js

// Step 1: Create a function expression named greet and assign it an anonymous function that logs a greeting message to the console.

// Step 2: Call the greet function.

// Step 3: Create a function expression named add and assign it an anonymous function that takes two parameters and returns their sum.

// Step 4: Call the add function with the arguments 5 and 3, and store the result in a variable named sum.

// Step 5: Log the value of the sum variable to the console.

// Step 6: Create a function expression named multiply and assign it an anonymous function that takes two parameters and returns their product.

// Step 7: Call the multiply function with the arguments 4 and 2, and store the result in a variable named product.

// Step 8: Log the value of the product variable to the console.

// Step 9: Create a function expression named isEven and assign it an anonymous function that takes a number as a parameter and returns true if it's even, false otherwise.

// Step 10: Call the isEven function with the argument 6 and store the result in a variable named even.

// Step 11: Log the value of the even variable to the console.

// Step 12: Create a function expression named square and assign it an anonymous function that takes a number as a parameter and returns its square.

// Step 13: Call the square function with the argument 3 and store the result in a variable named squaredValue.

// Step 14: Log the value of the squaredValue variable to the console.

// Step 15: Create a function expression named fullName and assign it an anonymous function that takes two parameters (firstName and lastName) and returns the full name as a string.

// Step 16: Call the fullName function with the arguments 'John' and 'Doe', and store the result in a variable named name.

// Step 17: Log the value of the name variable to the console.

// Step 18: Create a function expression named capitalize and assign it an anonymous function that takes a string as a parameter and returns the capitalized version of the string.

// Step 19: Call the capitalize function with the argument 'javascript' and store the result in a variable named capitalizedString.

// Step 20: Log the value of the capitalizedString variable to the console.

const greet = function () {
  console.log('Hello there!');
};
greet();

const add = function (a, b) {
  return a + b;
};
let sum = add(5, 3);
console.log(sum);

const multiply = function (a, b) {
  return a * b;
};
let product = multiply(4, 2);
console.log(product);

const isEven = function (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
let even = isEven(6);
console.log(even);

const square = function (number) {
  return number * number;
};
let squaredValue = square(3);
console.log(squaredValue);

const fullName = function (firstName, lastName) {
  return firstName + ' ' + lastName;
};
let name = fullName('John', 'Doe');
console.log(name);

const capitalize = function (string) {
  return string.toUpperCase();
};
let capitalizedString = capitalize('javascript');
console.log(capitalizedString);
