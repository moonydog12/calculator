const display = document.getElementById('display');
const digits = document.querySelectorAll('.digits button');

// Functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  }
}

function populateDisplay() {
  digits.forEach((digit) =>
    digit.addEventListener('click', function () {
      let chosenDigit = this.textContent;
      display.textContent += chosenDigit;
    })
  );
}
populateDisplay();
