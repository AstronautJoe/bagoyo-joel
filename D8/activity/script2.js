// script2.js

// Activity: Exploring ES6 Features

// Objective: Practice using ES6 features to enhance your JavaScript code.

// Instructions:
// 1. Create an HTML file with a heading that says "ES6 Features".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using ES6 features. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Use arrow functions to calculate the square of a given number and log the result to the console.
//    b. Use template literals to create a welcome message that includes the name and age of a person.
//    c. Use destructuring to extract the first and last name from a person object and log them to the console.
//    d. Use the spread operator to merge two arrays into a single array.
//    e. Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.
//    f. Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate ES6 features to accomplish the given task.

// Good luck!

// Your code implementation goes here:

// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const squareArrow = (num) => num * num;
console.log(squareArrow(4)); //should output 16

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const personLiteral = {
  name: 'johnny',
  age: 12,
};
console.log(
  `Hi my name is ${personLiteral.name} and my age is ${personLiteral.age}`
);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
  firstName: 'eren',
  lastName: 'yaeger',
};

const { firstName, lastName } = person;
console.log(
  `The person's first name is ${firstName} and his last name is ${lastName}`
);

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const calculateRectangleArea = (length = 1, width = 2) => length * width;
console.log(calculateRectangleArea()); //Output: 2

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
  constructor(name = 'Pearson', age = '25') {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi! I am ${this.name} and my age is ${this.age}`);
  }
}
// You can only instantiate an object with the class using 'new'
// Using defaults
const newPerson = new Person().introduce();
// Using parameters
const anotherPerson = new Person('Mary', 33).introduce();
