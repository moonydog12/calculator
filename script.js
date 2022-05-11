const displayZone = document.querySelector('#display-zone');
const storeZone = document.querySelector('#store-zone');
const digits = document.querySelectorAll('.digits button');

const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

let data = {
  displayNumber: '',
  storedNumber: '',
  operator: '',
};
// Listeners
clearBtn.addEventListener('click', clear);

equalBtn.addEventListener('click', executeEqual);

digits.forEach(function (digit) {
  digit.addEventListener('click', (e) => {
    displayZone.textContent += e.target.textContent;
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
  displayZone.textContent = data.displayNumber;
  storeZone.textContent = data.storedNumber;
}

function executeOperator(e) {
  data.operator = e.target.textContent;
  data.displayNumber = +displayZone.textContent;
  console.log(data);
  if (!data.storedNumber && data.displayNumber) {
    data.storedNumber = data.displayNumber;
    data.displayNumber = '';
    populateUI();
    return;
  }

  if (data.storedNumber && data.displayNumber) {
    let solution = operate(
      data.operator,
      +data.storedNumber,
      +data.displayNumber
    );
    data.displayNumber = solution;
    data.storedNumber = '';
    populateUI();
    return;
  }
}

function executeEqual() {
  //將storedNumber、displayNumber轉成number形別並傳入operate fn
  data.displayNumber = +displayZone.textContent;
  console.log(data);
  let solution = operate(data.operator, data.storedNumber, data.displayNumber);
  data.displayNumber = solution;
  data.storedNumber = '';
  populateUI();
}

function clear() {
  data.displayNumber = '';
  data.operator = '';
  data.storedNumber = '';
  populateUI();
}
