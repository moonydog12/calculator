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

// Listeners

digits.forEach(function (digit) {
  digit.addEventListener('click', (e) => {
    display.textContent += e.target.textContent;
  });
});

const operateButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
operateButtons.forEach(function (button) {
  button.addEventListener('click', (e) => {});
});

equalBtn.addEventListener('click', () => {});
