//—------------
// Step 1: Create an array called 'students' with three objects representing student information.

// Each student object should have properties: 'name', 'age', and 'grade'.

// Step 2: Access the name of the second student in the 'students' array and log it to the console.

// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.

// Step 6: Access the title of the 'book' object and log it to the console.

// Step 7: Update the 'year' property of the 'book' object to 1930.

// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.

// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.

// Step 10: Create an array called 'library' and add the 'book' object to it.

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.

// Step 13: Access the 'model' property of the 'car' object and log it to the console.

// Step 14: Update the 'year' property of the 'car' object to 2023.

// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.

// Step 16: Call the 'startEngine' method of the 'car' object.

// Step 17: Create an array called 'garage' and add the 'car' object to it.

// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.

// Step 20: Access the 'age' property of the 'person' object and log it to the console.

// Feel free to add more steps or customize the activity according to your needs.

const students = [
  {
    name: 'John Doe',
    age: 18,
    grade: 12,
  },
  {
    name: 'Jane Smith',
    age: 17,
    grade: 11,
  },
  {
    name: 'Tom Johnson',
    age: 16,
    grade: 10,
  },
];

console.log('Second Students name is: ', students[1].name);

const newStudent = {
  name: 'Bruce Wayne',
  age: 27,
  grade: 12,
};

students.push(newStudent);

for (arrayIndex = 0; arrayIndex < students.length; arrayIndex++) {
  console.log('Students array contents: ', students[arrayIndex]);
}

const book = {
  title: 'James and the Giant Peach',
  author: 'Roald Dahl',
  year: '2001',
};

console.log('Book Title: ', book.title);

book.year = 1930;

book.getSummary = function () {
  return `\n Book's Title: ${this.title}\n Book's Author: ${this.author}\n Book's year: ${this.year}`;
};

console.log(book.getSummary());

const library = [];

library.push(book);

console.log(library);

const car = {
  brand: 'Toyota',
  model: 'Model-335',
  year: '2002',
};

console.log(car.model);

car.startEngine = function () {
  console.log(`Vroom vroom! \n Car's engine is starting!`);
};

car.startEngine();

const garage = [];

garage.push(car);

console.log(garage);

const person = {
  name: 'Michael',
  age: 23,
  city: 'Dubai',
};

console.log(person.age);
