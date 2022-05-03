const display = document.getElementById('display');
const wait = document.querySelector('#wait');
const digits = document.querySelectorAll('.digits button');

const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

// Listeners
clearBtn.addEventListener('click', () => {
  display.textContent = '';
});

equalBtn.addEventListener('click', () => {
  let curNum = +display.textContent;
  let prevNum = +output[0];
  let operator = output[1];
  output = [];
  let solution = operate(operator, prevNum, curNum);
  display.textContent = solution;
});

digits.forEach(function (digit) {
  digit.addEventListener('click', populateUI);
});
let output = [];
const operateButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
operateButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    let prevNum = display.textContent;
    let operator = button.textContent;
    display.textContent = '';
    output.push(prevNum);
    output.push(operator);
    console.log(output);
  });
});

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

function populateUI() {
  display.textContent += this.textContent;
}
