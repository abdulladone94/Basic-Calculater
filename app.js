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

const handleEqual = () => {
  const inputArray = display.value.split(/[-,+,/,*]/);
  const isPlusClicked = display.value.includes("+");
  const isMinusClicked = display.value.includes("-");
  const isMultiplyClicked = display.value.includes("*");
  const isDivisionClicked = display.value.includes("/");
  const firstNo = inputArray[0];
  const secondNo = inputArray[1];

  if (isPlusClicked) {
    display.value = parseFloat(firstNo) + parseFloat(secondNo);
    return;
  }

  if (isMinusClicked) {
    display.value = parseFloat(firstNo) - parseFloat(secondNo);
    return;
  }

  if (isMultiplyClicked) {
    display.value = parseFloat(firstNo) * parseFloat(secondNo);
    return;
  }

  if (isDivisionClicked) {
    display.value = parseFloat(firstNo) / parseFloat(secondNo);
    return;
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
