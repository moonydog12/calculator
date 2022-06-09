const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.buttons .digit-btn');
const operators = document.querySelectorAll('.buttons .operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    appendNumber(digit.innerHTML);
  });
});

clearBtn.addEventListener('click', clean);

deleteBtn.addEventListener('click', deleteNumber);
//點擊按鈕渲染數字到計算機螢幕
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
// 運算function
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
