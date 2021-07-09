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
  var y = displayValue;
  if (!isNaN(y)) {
    displayValue = y + "+";
  } else {
    alert("Plus wrong entry");
  }
};

const handleMinus = () => {
  var minus = displayValue;
  if (!isNaN(minus)) {
    displayValue = minus + "-";
  } else {
    alert("Minus wrong entry");
  }
};

const handleMultiply = () => {
  var mult = displayValue;
  if (!isNaN(mult)) {
    displayValue = mult + "*";
  } else {
    alert("Multiply wrong entry");
  }
};

const handleDivide = () => {
  var divi = displayValue;
  if (!isNaN(divi)) {
    displayValue = divi + "/";
  } else {
    alert("Divide wrong entry");
  }
};

const handleEqual = incldA => {
  var eq = displayValue.split(/[-,+,/,*]/);
  var incldA = displayValue.includes("+");
  var incldS = displayValue.includes("-");
  var incldM = displayValue.includes("*");
  var incldD = displayValue.includes("/");
  var firstNo = eq[0];
  var secondNo = eq[1];
  if (incldA === true) {
    displayValue = parseFloat(firstNo) + parseFloat(secondNo);
  } else if (incldS === true) {
    displayValue = parseFloat(firstNo) - parseFloat(secondNo);
  } else if (incldM === true) {
    displayValue = parseFloat(firstNo) * parseFloat(secondNo);
  } else if (incldD === true) {
    displayValue = parseFloat(firstNo) / parseFloat(secondNo);
  }
};
