/* selector */
const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.digit-btn');
const operators = document.querySelectorAll('.operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

/* event listener */
digits.forEach((digit) => {
  digit.addEventListener('click', clickDigit);
});
operators.forEach((operator) => {
  operator.addEventListener('click', clickOperator);
});
clearBtn.addEventListener('click', cleanAll);
deleteBtn.addEventListener('click', deleteNumber);
equalBtn.addEventListener('click', clickEqualBtn);

/* variables */
let clickedOperator = null;
let storedNumber = null;
let currentNumber = null;

/* function */
function cleanAll() {
  clickedOperator = null;
  storedNumber = null;
  displayScreen.innerHTML = '';
}

function deleteNumber() {
  displayScreen.innerHTML = displayScreen.innerHTML.toString().slice(0, -1);
}

function clickDigit() {
  displayScreen.innerHTML += this.innerHTML;
}

function clickOperator() {
  clickedOperator = this.innerHTML;
  storedNumber = displayScreen.innerHTML;
  currentNumber = null;
  // clean current screen for new operand
  displayScreen.innerHTML = '';
}

function clickEqualBtn() {
  // check if the number & operator exist
  if (storedNumber === null || clickedOperator === null) {
    return '';
  }
  let result = operate(storedNumber, clickedOperator, displayScreen.innerHTML);
  displayScreen.innerHTML = result;
  storedNumber = null;
  clickedOperator = null;
}

function roundNumber(num) {
  let result = num.toString().length >= 5 ? parseFloat(num).toFixed(2) : num;
  return result;
}

/* operation function */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => roundNumber(a / b);

function operate(a, operator, b) {
  a = +a;
  b = +b;
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
  }
}
