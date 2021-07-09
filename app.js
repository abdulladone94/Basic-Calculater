const displayValue = document.getElementById("txt1");
var add = document.getElementById("add");
var eq = document.getElementById("equal");
var sub = document.getElementById("subtract");
var mul = document.getElementById("multiply");
var div = document.getElementById("divide");

add.addEventListener("click", () => {
  handlePlus();
});
eq.addEventListener("click", () => {
  handleEqual();
});
sub.addEventListener("click", () => {
  handleMinus();
});
mul.addEventListener("click", () => {
  handleMultiply();
});
div.addEventListener("click", () => {
  handleDivide();
});

const handlePlus = () => {
  var y = displayValue.value;
  if (!isNaN(y)) {
    displayValue.value = y + "+";
  } else {
    alert("Plus wrong entry");
  }
};

const handleMinus = () => {
  var minus = displayValue.value;
  if (!isNaN(minus)) {
    displayValue.value = minus + "-";
  } else {
    alert("Minus wrong entry");
  }
};

const handleMultiply = () => {
  var mult = displayValue.value;
  if (!isNaN(mult)) {
    displayValue.value = mult + "*";
  } else {
    alert("Multiply wrong entry");
  }
};

const handleDivide = () => {
  var divi = displayValue.value;
  if (!isNaN(divi)) {
    displayValue.value = divi + "/";
  } else {
    alert("Divide wrong entry");
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
