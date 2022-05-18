'use strict';
let currOperand = '';
let prevOperand = '';
let operator = '';

const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.buttons .digit-btn');
const operators = document.querySelectorAll('.buttons .operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

/* LISTENERS */
digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    populateNumber(digit.textContent);
  });
});

operators.forEach((button) =>
  button.addEventListener('click', () => {
    currOperand = displayScreen.textContent;
    operator = button.textContent;
    displayScreen.textContent = '';
  })
);

equalBtn.addEventListener('click', () => {
  prevOperand = currOperand;
  currOperand = displayScreen.textContent;
  let solution = +operate(operator, prevOperand, currOperand);
  console.log(prevOperand, operator, currOperand, '=', solution);
  populateNumber(solution);
});

clearBtn.addEventListener('click', clear);

/* FUNCTIONS */
function resetOperand() {}

function populateNumber(number) {
  if (typeof number === 'string') {
    displayScreen.textContent += number;
  } else if (typeof number === 'number') {
    displayScreen.textContent = number;
  }
}

function clear() {
  currOperand = '';
  prevOperand = '';
  operator = '';
  displayScreen.textContent = '';
}

function operate(operator, a, b) {
  // convert possible string value to number
  a = +a;
  b = +b;
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
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
