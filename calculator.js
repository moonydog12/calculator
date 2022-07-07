/* selector */
const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.digit-btn');
const operators = document.querySelectorAll('.operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

/* global variable */
let clickedOperator, storedNumber, currentNumber;

/* event listener */
digits.forEach((digit) => {
  digit.addEventListener('click', clickDigit);
});
operators.forEach((operator) => {
  operator.addEventListener('click', clickOperator);
});
clearBtn.addEventListener('click', allClean);
deleteBtn.addEventListener('click', deleteNumber);
equalBtn.addEventListener('click', clickEqualBtn);

/* function */
function allClean() {
  clickedOperator = null;
  storedNumber = null;
  displayScreen.innerHTML = '';
}

function deleteNumber() {
  displayScreen.innerHTML = displayScreen.innerHTML.toString().slice(0, -1);
}

function clickDigit() {
  displayScreen.innerHTML += this.innerHTML;
}

function clickOperator() {
  clickedOperator = this.innerHTML;
  storedNumber = displayScreen.innerHTML;
  // 清空screen騰出下一個運算數字的空間
  displayScreen.innerHTML = '';
}

function clickEqualBtn() {
  if (
    storedNumber === null ||
    storedNumber === undefined ||
    clickedOperator === null ||
    clickedOperator === undefined
  ) {
    console.log('not enough args');
    return;
  }
  let answer = operate(storedNumber, clickedOperator, displayScreen.innerHTML);
  displayScreen.innerHTML = answer;
  storedNumber = null;
  clickedOperator = null;
}

/* operation function */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (a === 0 || b === 0) {
    console.log("Please don't crash me !");
    return '';
  }
  return a / b;
};

function operate(a, operator, b) {
  // convert possible string to number(Unary Operator)
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
