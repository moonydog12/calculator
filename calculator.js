/* 元素選擇器 */

const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.buttons .digit-btn');
const operators = document.querySelectorAll('.buttons .operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

let clickedOperator = null;
let storedNumber = null;

/* 行為監聽 */

digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    appendNumber(digit.innerHTML);
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', clickOperators);
});

clearBtn.addEventListener('click', clean);
deleteBtn.addEventListener('click', deleteNumber);
equalBtn.addEventListener('click', clickEqualBtn);

/* Fns */
/* 點擊按鈕添加數字到螢幕 */
function appendNumber(number) {
  let value = displayScreen.innerHTML;
  if (value === '0' || value === 0) {
    displayScreen.innerHTML = '';
  }
  displayScreen.innerHTML += number;
}

/* 清除螢幕(AC鍵) */
function clean() {
  displayScreen.innerHTML = '0';
}

/* 刪除單個螢幕數字 */
function deleteNumber() {
  displayScreen.innerHTML = displayScreen.innerHTML.toString().slice(0, -1);
  if (displayScreen.innerHTML.length === 0) {
    displayScreen.innerHTML = '0';
  }
}

/* 按下運算符 */
function clickOperators() {
  clickedOperator = this.innerHTML;
  storedNumber = displayScreen.innerHTML;
  if (storedNumber !== null && clickedOperator !== null) {
    displayScreen.innerHTML = '';
  }
}

/* 按下=鍵 */
function clickEqualBtn() {
  let currentNumber = displayScreen.innerHTML;
  //檢查輸入數字
  if (storedNumber === null || storedNumber === undefined) {
    alert('沒有輸入數字!');
    return;
  } else if (
    currentNumber === null ||
    currentNumber === undefined ||
    currentNumber === ''
  ) {
    alert('螢幕上沒有數字');
    return;
  }
  //檢查輸入運算符
  else if (
    clickedOperator === null ||
    clickedOperator === undefined ||
    clickedOperator === ''
  ) {
    alert('沒有輸入運算符!');
    return;
  }

  let answer = operate(storedNumber, clickedOperator, currentNumber);
  storedNumber = null;
  clickedOperator = null;
  displayScreen.innerHTML = answer;
}

/* 運算fn */
function operate(a, operator, b) {
  // 字串轉成數字
  a = Number(a);
  b = Number(b);
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
