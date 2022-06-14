/*元素選擇器*/

const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.buttons .digit-btn');
const operators = document.querySelectorAll('.buttons .operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

let clickedOperator = null;
let storedNumber = null;
/*行為監聽*/

digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    appendNumber(digit.innerHTML);
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', function (e) {
    clickedOperator = operator.innerHTML;
    storedNumber = displayScreen.innerHTML;
    displayScreen.innerHTML = '';
  });
});

clearBtn.addEventListener('click', clean);
deleteBtn.addEventListener('click', deleteNumber);
equalBtn.addEventListener('click', clickEqualBtn);

/*點擊按鈕渲染數字到計算機螢幕*/
function appendNumber(number) {
  let value = displayScreen.textContent;
  if (value === '0' || value === 0) {
    value = '';
  }
  value = value + number;
  displayScreen.textContent = value;
}

function clean() {
  displayScreen.innerHTML = '0';
}

function deleteNumber() {
  let value = displayScreen.innerHTML;
  value = value.toString().slice(0, -1);
  displayScreen.innerHTML = value;
  if (value.length === 0) {
    displayScreen.innerHTML = '0';
  }
}

function clickEqualBtn() {
  let currentNumber = displayScreen.innerHTML;
  //檢查是否接收到使用者輸入數字
  if (storedNumber === null || storedNumber === undefined) {
    alert('沒有輸入數字!');
    return;
  }
  //檢查是否接收到使用者輸入運算符
  if (
    clickedOperator === null ||
    clickedOperator === undefined ||
    clickedOperator === ''
  ) {
    alert('沒有輸入運算符!');
    return;
  }
  let answer = operate(storedNumber, clickedOperator, currentNumber);
  storedNumber = null;
  displayScreen.innerHTML = answer;
}

/* 運算function */
function operate(a, operator, b) {
  // 把字串輸入轉成數字
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
