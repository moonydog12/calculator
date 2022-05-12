const display = document.querySelector('#display');
const digits = document.querySelectorAll('.digits button');

const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

const data = {
  currentNum: '',
  prevNum: '',
  operator: '',
};

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
function compute(operator, previousNumber, currentNumber) {
  let a = Number(previousNumber);
  let b = Number(currentNumber);
  switch (operator) {
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
  data.currentNum = '';
  data.operator = '';
  data.prevNum = '';
  display.textContent = '';
}

// Listeners

digits.forEach(function (digit) {
  digit.addEventListener('click', (e) => {
    display.textContent += e.target.textContent;
  });
});

const operateButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
operateButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    data.operator = button.textContent;
    data.currentNum = display.textContent;
    console.log(data);
    if (data.prevNum === '' || data.prevNum === undefined) {
      data.prevNum = data.currentNum;
      data.currentNum = '';
      display.textContent = '';
      return;
    }
    let solution = compute(data.operator, data.prevNum, data.currentNum);
    console.log(solution);
    data.currentNum = solution;
    data.prevNum = '';
    display.textContent = data.currentNum;
    console.log(data);
  });
});

equalBtn.addEventListener('click', () => {
  data.currentNum = display.textContent;
  let solution = compute(data.operator, data.currentNum, data.prevNum);
  data.currentNum = solution;
  data.prevNum = '';
  display.textContent = data.currentNum;
});

clearBtn.addEventListener('click', clearData);
