// Based from Object-oriented Programming in JavaScript: Made Super Simple | Mosh
// https://www.youtube.com/watch?v=PFmuCDHHpwk
console.log('Hello World');

// Section: Creating Objects

// object literal syntax -> {}
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function () { // an object's method
//         console.log('draw');
//     }
// };

// Section: Factories and Constructors

// Factory function to create an object
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }

// const circle = createCircle(1);

// Constructor Function. To create an object
// function Circle(radius) {
//   console.log('this', this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }

// const another = new Circle(1);

// Section: Functions Are Objects

// In javascript functions are actually objects

// const Circle1 = new Function(
//   'radius',
//   `  console.log('this', this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }`
// );

// Circle.call({}, 1); // just like doing 'const another = new Circle(1);'

// // native object method apply is like call but you pass all arguements in array
// Circle.apply({}, [1, 2, 3]);
// const another = new Circle(1);

// Section: Reference vs Value Types

// Javascript has 2 main types
// Value / Primitive Types
// Number, String, Boolean, Symbol, undefined and null

// Reference Types
// Object, Function and Array

// Primitives are copied by value
// Objects are copied by reference

// Both x and y are actually pointing to the same object in memory
// let x = { value: 20 };
// let y = x;

// x.value = 20;

// // Example
// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number); // Gives 10, not the increased number

// // Another example where we have 2 variables pointing to the same object
// let obj = { value: 10 };
// function increase(obj) {
//   // local parameter here points to the same object
//   obj.value++;
// }
// increase(obj);
// console.log(obj); // Gives 11

// Section: Adding/Removing Properties
// Objects are dynamic meaning you can add, change properties on the fly
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }
// const circle = new Circle(10);

// // lets add a new property
// circle.location = { x: 1 };
// // now running circle in console.log shows a new property

// // You can also access a property using bracket notation
// circle['location'] = { x: 3 };

// // Useful for dynamically accessing, by changing the string
// // Also useful when the property name is seperated by space or special characters like '-'
// const propertyName = 'location';
// circle[propertyName] = { x: 1 };

// // delete operator to delete a property
// delete circle.location;
// // console.log(circle);// shows no location property now

// // or you can use
// delete circle['location'];

// Section: Enemurating properties

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }
// const circle = new Circle(10);
// You can use for in loop
// for (let key in circle) {
//   console.log(key);
// } // outputs both radius and draw properties

// To get the value of the properties, use bracket notation
// for (let key in circle) {
//   console.log(key, circle[key]);
// }

// To get the property and not the method
// for (let key in circle) {
//   if (typeof circle[key] !== 'function') console.log(key, circle[key]);
// }

// another way to get all the properties of an object
// const keys = Object.keys(circle);
// console.log(keys);
// but you wont distinguish properties from methods

// To check for the existence of a property of method in an object:
// if ('radius' in circle) console.log('Circle has a radius');

// Section: Abstraction
// function Circle(radius) {
//   this.radius = radius;
//   this.defaultLocation = { x: 0, y: 0 };
//   this.computeOptimumLocation = function (factor) {
//     //..
//   };
//   this.draw = function () {
//     console.log('draw');
//   };
// }
// const circle = new Circle(10);
// circle.draw();

// Hide the details, show the essentials like a dvd player

// Section: Private Properties and Methods
// do this by assigning methods and properties as local variables
// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };
//   let computeOptimumLocation = function (factor) {
//     //..
//   };
//   this.draw = function () {
//     computeOptimumLocation(0.1);
//     // defaultLocation
//     /// this.radius
//     console.log('draw');
//   };
// }
// const circle = new Circle(10);
// // circle. does not allow to change the defaultlocation and computeOptimumLocation
// circle.draw();

// Section: Getters/Setters
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  // To access private properties do this
  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log('draw');
  };

  // Or you can do this:
  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error('Invalid location.');
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();
