let rangeStart = parseInt(prompt('Give me the start of the range:'));
let rangeEnd = parseInt(prompt('Give me the end of the range:'));

while (rangeEnd < rangeStart) {
  rangeEnd = parseInt(
    prompt(
      'End of the range is less than the start of the range, please input another number:'
    )
  );
}

for (let index = rangeStart; index <= rangeEnd; index++) {
  console.log(index);
}
