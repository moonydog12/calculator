const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digits button');

const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

let currentNum = '';
let prevNum = '';
let operator = '';
// Functions
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
// 計算函式
function compute(ope, a, b) {
  switch (ope) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
  }
}

function clearData() {
  currentNum = '';
  prevNum = '';
  operator = '';
  display.textContent = currentNum;
}
// Listeners

digits.forEach(function (digit) {
  digit.addEventListener('click', (e) => {
    display.textContent += e.target.textContent;
  });
});

const operateButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
operateButtons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    prevNum = +display.textContent;
    operator = e.target.textContent;
    display.textContent = '';
  });
});

equalBtn.addEventListener('click', () => {
  currentNum = +display.textContent;
  let output = compute(operator, prevNum, currentNum);
  display.textContent = output;
});

clearBtn.addEventListener('click', clearData);
