const displayZone = document.querySelector('#display-zone');
const storeZone = document.querySelector('#store-zone');
const digits = document.querySelectorAll('.digits button');

const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

let displayNumber;
let storedNumber;
let operator;
// Listeners
clearBtn.addEventListener('click', clear);

equalBtn.addEventListener('click', executeEqual);

digits.forEach(function (digit) {
  digit.addEventListener('click', (e) => {
    displayZone.textContent += e.target.textContent;
    displayNumber = displayZone.textContent;
  });
});

const operateButtons = [addBtn, subtractBtn, multiplyBtn, divideBtn];
operateButtons.forEach(function (button) {
  button.addEventListener('click', executeOperator);
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
  displayZone.textContent = displayNumber;
  storeZone.textContent = storedNumber;
}

function executeOperator(e) {
  operator = e.target.textContent;
  //檢查store區域是否有數字 沒有的話SET storeNumber to displayNumber THEN RESET displayNumber
  if (!storeZone.textContent) {
    console.log('store區域沒有資料');
    storedNumber = displayNumber;
    displayNumber = '';
    populateUI();
    return;
  } else if (storeZone.textContent && displayZone.textContent) {
    displayNumber = +displayZone.textContent;
    storedNumber = +storeZone.textContent;
    let solution = operate(operator, storedNumber, displayNumber);
    storedNumber = '';
    displayNumber = solution;
    populateUI();
    return;
  }
}

function executeEqual() {
  //將storedNumber、displayNumber轉成number形別並傳入operate fn
}

function clear() {
  displayNumber = '';
  storedNumber = '';
  operator = '';
  populateUI();
}
