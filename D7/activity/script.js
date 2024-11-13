// Add event listener for the submit button on my form
const form = document.getElementById('loan-form');
form.addEventListener('submit', handleSubmit);

const loan = {
  amount: document.getElementById('loan-amount'),
  interestRate: document.getElementsByClassName('interest-rate')[0],
  term: document.getElementsByClassName('loan-term')[0],
  //We access the .value during the event so that we get the current value after the script loads. accessing it directly in the object property wont work
};

function handleSubmit(event) {
  const principal = parseFloat(loan.amount.value); //Principal Loan Amount
  const rate = parseFloat(loan.interestRate.value) / 100 / 12; // Monthly interest Rate (annual rate divided by 12)
  const term = parseFloat(loan.term.value) * 12; // total number of payments (months)

  // Monthly payment formula (Amortization formula)
  const finalAmount =
    (principal * rate * Math.pow(1 + rate, term)) /
    (Math.pow(1 + rate, term) - 1);

  let loanOutputParagraph = document.querySelector('p.loan-output');
  loanOutputParagraph.textContent = `Monthly Payment: $${finalAmount.toFixed(
    2
  )}`;
  event.preventDefault();
}
