let currOperand = '';
let prevOperand = '';
let operator = '';

const displayScreen = document.querySelector('#display');
const digits = document.querySelectorAll('.buttons .digit-btn');
const operators = document.querySelectorAll('.buttons .operator-btn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');
/* LISTENERS */
digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    populateNumber(digit.textContent);
  });
});

operators.forEach((button) => button.addEventListener('click', () => {}));

equalBtn.addEventListener('click', () => {
  if (!prevOperand) {
    prevOperand = currOperand;
    currOperand = displayScreen.textContent;
  }
  let solution = operate(prevOperand, operator, currOperand);
  console.log(
    `curr:${currOperand} prev:${prevOperand} operator:${operator} sol:${solution}`
  );
  populateNumber(solution);
  resetData();
});

clearBtn.addEventListener('click', clear);

deleteBtn.addEventListener('click', deleteNumber);
/* FUNCTIONS */

function populateNumber(number) {
  if (typeof number === 'string') {
    displayScreen.textContent += number;
  } else if (typeof number === 'number') {
    displayScreen.textContent = number;
  }
}

function clear() {
  currOperand = '';
  prevOperand = '';
  operator = '';
  resetOperand();
}

function deleteNumber() {
  displayScreen.textContent = displayScreen.textContent.toString().slice(0, -1);
}
