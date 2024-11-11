// introduction to arrays

//Creating an array
let fruits = ['apple', 'banana', 'orange'];

// Accessing array elements
console.log('First Fruit:', fruits[0]);
console.log('First Fruit:', fruits[1]);
console.log('First Fruit:', fruits[2]);

//Topc: Modifying Arrays
fruits[1] = 'grape';

//adds an array element to the end
fruits.push('strawberry');

//removes the last element
fruits.pop();

console.log('Modified Arrray', fruits);

//Methods, what the array can do, functions
//Properties, used to describe an array

// Array Iteration
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Array forEach method
let colors = ['red', 'green', 'blue'];

//For each content of the colors array, store it in the variable named 'color'
colors.forEach(function (color) {
  console.log(color);
});

// Methods and Properties

// Length
console.log('Array Length', numbers.length);

// indexOf
console.log('Index of 3', numbers.indexOf(3));

// includes
console.log('Includes 5:', numbers.includes(5));

// join - creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string
console.log('Joined Array', numbers.join(' - '));

// slice - remove a and b 
let sllicedArray = numbers.slice(1, 4);
console.log('Sliced Array: ', sllicedArray);
