/* selector */
const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.buttons .digit-btn');
const operators = document.querySelectorAll('.buttons .operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

/* global variables */
let clickedOperator;
let storedNumber;

/* event listener */
digits.forEach((digit) => {
  digit.addEventListener('click', clickDigits);
});

operators.forEach((operator) => {
  operator.addEventListener('click', clickOperators);
});

clearBtn.addEventListener('click', allClean);
deleteBtn.addEventListener('click', deleteNumber);
equalBtn.addEventListener('click', clickEqualBtn);

/* Funcs */
function appendNumber(number) {
  displayScreen.innerHTML += number;
}

function allClean() {
  clickedOperator = null;
  storedNumber = null;
  displayScreen.innerHTML = '0';
}

function deleteNumber() {
  displayScreen.innerHTML = displayScreen.innerHTML.toString().slice(0, -1);
}

function clickDigits() {
  appendNumber(this.innerHTML);
}

function clickOperators() {
  clickedOperator = this.innerHTML;
  storedNumber = displayScreen.innerHTML;
}

function clickEqualBtn() {
  let currentNumber = displayScreen.innerHTML;
  let answer = operate(storedNumber, clickedOperator, currentNumber);
  displayScreen.innerHTML = answer;
}

/* operations */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, operator, b) {
  a = parseInt(a);
  b = parseInt(b);

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
    default:
      return null;
  }
}
