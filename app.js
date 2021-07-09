const displayValue = document.getElementById("txt1");
var add = document.getElementById("add");
var eq = document.getElementById("equal");
var sub = document.getElementById("subtract");
var mul = document.getElementById("multiply");
var div = document.getElementById("divide");

const handleOperatorClicked = (operator, errorMessage) => {
  var y = displayValue.value;
  if (!isNaN(y)) {
    displayValue.value = y + operator;
  } else {
    alert(errorMessage);
  }
};

const handleEqual = incldA => {
  var eq = displayValue.value.split(/[-,+,/,*]/);
  var incldA = displayValue.value.includes("+");
  var incldS = displayValue.value.includes("-");
  var incldM = displayValue.value.includes("*");
  var incldD = displayValue.value.includes("/");
  var firstNo = eq[0];
  var secondNo = eq[1];
  if (incldA === true) {
    displayValue.value = parseFloat(firstNo) + parseFloat(secondNo);
  } else if (incldS === true) {
    displayValue.value = parseFloat(firstNo) - parseFloat(secondNo);
  } else if (incldM === true) {
    displayValue.value = parseFloat(firstNo) * parseFloat(secondNo);
  } else if (incldD === true) {
    displayValue.value = parseFloat(firstNo) / parseFloat(secondNo);
  }
};

add.addEventListener("click", () => {
  handleOperatorClicked("+", "Plus wrong entry");
});
eq.addEventListener("click", () => {
  handleEqual();
});
sub.addEventListener("click", () => {
  handleOperatorClicked("-", "Minus wrong entry");
});
mul.addEventListener("click", () => {
  handleOperatorClicked("*", "Multiply wrong entry");
});
div.addEventListener("click", () => {
  handleOperatorClicked("/", "Division wrong entry");
});
