// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.

// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

for (index = 0; index <= 10; index++) {
  console.log(index);
  console.log(isEven(index));
}

function multiply(number1, number2) {
  return number1 * number2;
}

// while (true) {
//   //Start at true so it will keep running, then ask for the 2 numbers
//   let number1 = parseInt(prompt('Provide a number: '));
//   let number2 = parseInt(prompt('Provide another number: '));

//   //check if any of the 2 numbers is negative
//   if (number1 < 0 || number2 < 0) {
//     console.log('negative number detected, terminating now.');
//     break;
//   }

//   console.log('The product of your 2 numbers is: ', multiply(number1, number2));
// }

function reverseString(string) {
  //split the string into array elements
  let stringArray = string.split('');
  //reverse array elements
  let reversedStringArray = stringArray.reverse();
  //join array elements
  let reversedString = reversedStringArray.join('');

  //A faster way would be return string.split('').reverse().join('');

  return reversedString;
}
console.log(reverseString('hello'));

function countVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  //split the string into array
  let stringArray = string.split('');

  for (
    stringArrayIndex = 0;
    stringArrayIndex < stringArray.length;
    stringArrayIndex++
  ) {
    for (
      vowelsArrayIndex = 0;
      vowelsArrayIndex < vowels.length;
      vowelsArrayIndex++
    ) {
      if (
        stringArray[stringArrayIndex].toLowerCase() === vowels[vowelsArrayIndex]
      ) {
        vowelCount++;
      }
    }
  }

  return vowelCount;
}

//An optomized way would be:
// function countVowels(string) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelCount = 0;

//   for (let char of string.toLowerCase()) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }

//   return vowelCount;
// }

function findMax(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    //Change max number to the bigger number
    if (maxNumber < array[i]) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}
numbers = [4, 9, 2, 7, 5];
console.log(findMax(numbers));

function calculateFactorial(number) {
  factorialNumbers = [];
  for (let i = number; i > 0; i--) {
    factorialNumbers.push(i);
  }

  let finalProduct = factorialNumbers[0];
  for (let i = 1; i < factorialNumbers.length; i++) {
    finalProduct = finalProduct * factorialNumbers[i];
  }
  return finalProduct;
}
console.log(calculateFactorial(5));

//An optimized way is this:
// function calculateFactorial(number) {
//     let finalProduct = 1;
//     for (let i = number; i > 1; i--) {
//       finalProduct *= i;
//     }
//     return finalProduct;
//   }

//   console.log(calculateFactorial(5));  // Output: 120

function isPalindrome(){
    
}
