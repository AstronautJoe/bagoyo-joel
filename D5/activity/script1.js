let score = parseInt(prompt('Please Enter a Score:'));
let grade = '';

if (score >= 90) {
  grade = 'A';
} else if (score >= 80 && score <= 89) {
  grade = 'B';
} else if (score >= 70 && score <= 79) {
  grade = 'C';
} else if (score >= 60 && score <= 69) {
  grade = 'D';
} else {
  grade = 'F';
}

alert('Your Grade is: ' + grade);

//Tests:
// 99 -> A
// 85 -> B
// 73 -> C
// 63 -> D
// 10 -> F
