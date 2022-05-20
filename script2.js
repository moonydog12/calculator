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

function check() {
  if (operator) {
    console.log(operator, button.textContent);
  }
}

operators.forEach((button) =>
  button.addEventListener('click', () => {
    let temp;
    //if operator already exists, put into another variable
    if (operator) {
      temp = operator;
      operator = null;
    }
    currOperand = displayScreen.textContent;
    operator = button.textContent;
    console.log(temp, operator);
    resetOperand();
  })
);

equalBtn.addEventListener('click', () => {
  if (!prevOperand) {
    prevOperand = currOperand;
    currOperand = displayScreen.textContent;
  }
  let solution = operate(prevOperand, operator, currOperand);
  console.log(
    `curr:${currOperand} prev:${prevOperand} operator:${operator} sol:${solution}`
  );
  populateNumber(solution);
  resetData();
});

clearBtn.addEventListener('click', clear);

/* FUNCTIONS */
function resetData() {
  prevOperand = '';
  operator = '';
}

function resetOperand() {
  displayScreen.textContent = '';
}

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
  resetOperand();
}

function operate(a, operator, b) {
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
