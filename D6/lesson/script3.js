// defining a function
function greet() {
  console.log('Hello Function');
}

// calling the function
greet();

// Function Declaration vs. Function Expression
function squareDeclaration(num) {
  //return num * num;
  console.log(num * num);
}

const squareExpression = function(num){
    return num * num;
}