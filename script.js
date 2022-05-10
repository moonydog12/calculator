const displayZone = document.querySelector('#display-zone');
const storeZone = document.querySelector('#store-zone');
const digits = document.querySelectorAll('.digits button');

const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

let displayNumber = '';
let storedNumber = '';
let operator = '';
// Listeners
clearBtn.addEventListener('click', () => {
  displayZone.textContent = '';
  storeZone.textContent = '';
});

equalBtn.addEventListener('click', () => {
  //將storedNumber、displayNumber轉成number形別並傳入operate fn
  let solution = operate(operator, +storedNumber, +displayNumber);
  displayNumber = solution;
  storedNumber = '';
  storeZone.textContent = storedNumber;
  displayZone.textContent = displayNumber;
});

digits.forEach(function (digit) {
  digit.addEventListener('click', populateUI);
});

const operateButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
operateButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    storedNumber = displayNumber;
    displayNumber = '';
    operator = button.textContent;
    storeZone.textContent = `${storedNumber} ${operator}`;
    displayZone.textContent = displayNumber;
    return storedNumber, operator;
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
  displayZone.textContent += this.textContent;
  displayNumber = displayZone.textContent;
}
