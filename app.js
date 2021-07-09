const display = document.getElementById("txt1");
const add = document.getElementById("add");
const eq = document.getElementById("equal");
const sub = document.getElementById("subtract");
const mul = document.getElementById("multiply");
const div = document.getElementById("divide");

const handleOperatorClicked = (operator, errorMessage) => {
  if (!isNaN(y)) {
    display.value = display.value + operator;
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
