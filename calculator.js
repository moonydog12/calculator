/* selector */
const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.digit-btn');
const operators = document.querySelectorAll('.operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

/* event listener */
digits.forEach((digit) => {
  digit.addEventListener('click', clickDigit);
});
operators.forEach((operator) => {
  operator.addEventListener('click', clickOperator);
});
clearBtn.addEventListener('click', cleanAll);
deleteBtn.addEventListener('click', deleteNumber);
equalBtn.addEventListener('click', clickEqualBtn);

/* variables */
let operator = null;
let storedNumber = null;
let currentNumber = null;

/* function */
function cleanAll() {
  operator = null;
  storedNumber = null;
  currentNumber = null;
  displayScreen.innerHTML = '';
}

function deleteNumber() {
  displayScreen.innerHTML = displayScreen.innerHTML.toString().slice(0, -1);
}

function clickDigit() {
  displayScreen.innerHTML += this.innerHTML;
}

function clickOperator() {
  // FIXME:連續計算功能
  // if (operator !== null && storedNumber !== null) {
  //   currentNumber = displayScreen.innerHTML;
  //   console.log(operate(storedNumber, operator, currentNumber));
  //   displayScreen.innerHTML = operate(storedNumber, operator, currentNumber);
  //   return;
  // }
  //把運算子&螢幕數字存入變數
  operator = this.innerHTML;
  storedNumber = displayScreen.innerHTML;
  //Reset screen for new number
  displayScreen.innerHTML = '';
}

function clickEqualBtn() {
  // 檢查變數內是否有值
  if (storedNumber === null || operator === null) return;
  compute();
}

function roundNumber(num) {
  return num.toString().length >= 5 ? parseFloat(num).toFixed(2) : num;
}
//FIXME:這個function的目的是?
function compute() {
  currentNumber = displayScreen.innerHTML;
  console.log(storedNumber, operator, currentNumber);
  displayScreen.innerHTML = operate(storedNumber, operator, currentNumber);
  storedNumber = null;
}
/* operation function */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => roundNumber(a / b);

function operate(a, operator, b) {
  a = +a;
  b = +b;
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
  }
}
