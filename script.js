let previousDisplay = document.getElementById("p-prev-display");
let currentDisplay = document.getElementById("current-p-display");
let numbers = document.getElementsByName("numbers");
let operators = document.getElementsByName("operator");
let equal = document.getElementById("op");
let del = document.getElementById("btn-delete");

let ope
let num1
let num2

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (ope == undefined && num1 == undefined) {
      currentDisplay.innerText += e.target.value
    } else if (ope !== undefined && num1 !== undefined) {
      currentDisplay.innerText += e.target.value
      num2 = currentDisplay.textContent
    }
  })
})

operators.forEach((op) => {

  op.addEventListener('click', (e) => {
    if (currentDisplay.textContent !== "" && num2 == undefined) {
      previousDisplay.textContent = currentDisplay.textContent + ' ' + op.textContent;
      num1 = currentDisplay.textContent
      currentDisplay.textContent = "";
      ope = op.value
    } else if (num1 !== undefined && num2 !== undefined) {
      previousDisplay.textContent = previousDisplay.textContent + currentDisplay.textContent;
      currentDisplay.textContent = calculate(num1, ope, num2);
      ope = op.value
      num2 = undefined
      num1 = currentDisplay.textContent;
      previousDisplay.textContent = currentDisplay.textContent + ' ' + op.textContent;
      currentDisplay.textContent = ""

    }

  });
});

function calculate(num1, ope, num2) {
  switch (ope) {
    case '+':
      return +num1 + +num2;
    case '-':
      return +num1 - +num2;
    case '*':
      return +num1 * +num2;
    case '÷':
      return +num1 / +num2;
  }
}

document.getElementById('btn-clear').addEventListener('click', () => {
  num1 = undefined;
  num2 = undefined;
  ope = undefined;
  currentDisplay.textContent = ""
  previousDisplay.textContent = ""
})

equal.addEventListener('click', () => {
  if (num1 !== undefined && num2 !== undefined) {
    previousDisplay.textContent = previousDisplay.textContent + ' ' + currentDisplay.textContent;
    currentDisplay.textContent = calculate(num1, ope, num2)
    num1 = undefined
    num2 = undefined
    ope = undefined
  } else if (num2 == undefined) {
    currentDisplay.textContent = currentDisplay.textContent;
  }
})

del.addEventListener('click', () => {
  result = currentDisplay.textContent.slice(0, -1);
  currentDisplay.textContent = result;
})