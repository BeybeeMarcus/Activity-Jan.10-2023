var currentNumber = "0";
var previousNumber = "0";
var currentOperator = "";
var result = 0;




function clearScreen() {
  currentNumber = "0";
  previousNumber = "0";
  currentOperator = "";
  result = 0;
  document.getElementById("result").innerHTML = currentNumber.toLocaleString();
}

function negateNumber() {
  currentNumber = -currentNumber;
  document.getElementById("result").innerHTML = currentNumber.toLocaleString();
}

function calculatePercent() {
  currentNumber = currentNumber / 100;
  document.getElementById("result").innerHTML = currentNumber.toLocaleString();
}

function addNumber(num) {
  if (currentNumber === "0") {
    currentNumber = num.toString();
  } else {
    currentNumber += num.toString();
  }

  document.getElementById("result").innerHTML = currentNumber.toLocaleString();
}



function addDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
  }
  document.getElementById("result").innerHTML = currentNumber.toLocaleString();
}

function addOperator(operator) {
  previousNumber = currentNumber;
  currentOperator = operator;
  currentNumber = "0";
}

function calculate() {
  switch (currentOperator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      result = currentNumber;

    

  }

  currentNumber = result.toLocaleString();
  document.getElementById("result").innerHTML = currentNumber.toLocaleString();

  console.log(result);
};
