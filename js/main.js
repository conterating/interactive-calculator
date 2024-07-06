let num1;
let operator;
let num2;

//adding function
function add(num1, num2) {
  return num1 + num2;
}

//subtracting function
function subtract(num1, num2) {
  return num1 - num2;
}

//multiplying function
function multiply(num1, num2) {
  return num1 * num2;
}

//dividing function
function divide(num1, num2) {
  return num1 / num2;
}

function operate() {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  }
}
