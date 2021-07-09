const display = document.getElementById("txt1");
var add = document.getElementById("add");
var eq = document.getElementById("equal");
var sub = document.getElementById("subtract");
var mul = document.getElementById("multiply");
var div = document.getElementById("divide");

const handleOperatorClicked = (operator, errorMessage) => {
  var y = display.value;
  if (!isNaN(y)) {
    display.value = y + operator;
  } else {
    alert(errorMessage);
  }
};

const handleEqual = incldA => {
  var eq = display.value.split(/[-,+,/,*]/);
  var incldA = display.value.includes("+");
  var incldS = display.value.includes("-");
  var incldM = display.value.includes("*");
  var incldD = display.value.includes("/");
  var firstNo = eq[0];
  var secondNo = eq[1];
  if (incldA === true) {
    display.value = parseFloat(firstNo) + parseFloat(secondNo);
  } else if (incldS === true) {
    display.value = parseFloat(firstNo) - parseFloat(secondNo);
  } else if (incldM === true) {
    display.value = parseFloat(firstNo) * parseFloat(secondNo);
  } else if (incldD === true) {
    display.value = parseFloat(firstNo) / parseFloat(secondNo);
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
