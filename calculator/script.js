let display = document.getElementById('display');
let firstNumber = null;
let secondNumber = null;
let operator = null;

function addNumber(number) {
  if (operator === null) {
    if (firstNumber === null) {
      firstNumber = number.toString();
    } else {
      firstNumber += number.toString();
    }
    display.value = firstNumber;
  } else {
    if (secondNumber === null) {
      secondNumber = number.toString();
    } else {
      secondNumber += number.toString();
    }
    display.value = secondNumber;
  }
}

function addOperator(op) {
  operator = op;
}

function clearDisplay() {
  display.value = "";
  firstNumber = null;
  secondNumber = null;
  operator = null;
}

function calculate() {
  if (firstNumber === null || secondNumber === null || operator === null) {
    return;
  }
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  display.value = result;
  firstNumber = result.toString();
  secondNumber = null;
  operator = null;
}