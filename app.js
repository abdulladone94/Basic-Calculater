var ad = document.getElementById("add");
var eq = document.getElementById("equal");
var sub = document.getElementById("subtract");
var mul = document.getElementById("multiply");
var div = document.getElementById("divide");

ad.addEventListener("click", () => {
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
  var y = document.getElementById("txt1").value;
  if (!isNaN(y)) {
    document.getElementById("txt1").value = y + "+";
  } else {
    alert("Plus wrong entry");
  }
};

const handleMinus = () => {
  var minus = document.getElementById("txt1").value;
  if (!isNaN(minus)) {
    document.getElementById("txt1").value = minus + "-";
  } else {
    alert("Minus wrong entry");
  }
};

const handleMultiply = () => {
  var mult = document.getElementById("txt1").value;
  if (!isNaN(mult)) {
    document.getElementById("txt1").value = mult + "*";
  } else {
    alert("Multiply wrong entry");
  }
};

const handleDivide = () => {
  var divi = document.getElementById("txt1").value;
  if (!isNaN(divi)) {
    document.getElementById("txt1").value = divi + "/";
  } else {
    alert("Divide wrong entry");
  }
};

// const handleEqual = () => {
//   var z = document.getElementById("txt1").value.split(/[+,-]/);
//   var firstNo = z[0];
//   var secondNo = z[1];
//   console.log(firstNo);
//   console.log(secondNo);
//   if (!isNaN(firstNo) && !isNaN(secondNo)) {
//     document.getElementById("txt1").value = parseFloat(firstNo) + parseFloat(secondNo);
//     // document.getElementById("txt1").value = parseFloat(firstNo) - parseFloat(secondNo);
//   } else if (!isNaN(secondNo)) {
//     document.getElementById("txt1").value = firstNo  ;
//     alert('Entry Issue')
//   } else  {
//     alert('Enter Nos only')
//   }
// };

const handleEqual = (incldA) => {
  var eq = document.getElementById("txt1").value.split(/[-,+,/,*]/);
  var incldA = document.getElementById("txt1").value.includes("+");
  var incldS = document.getElementById("txt1").value.includes("-");
  var incldM = document.getElementById("txt1").value.includes("*");
  var incldD = document.getElementById("txt1").value.includes("/");
  var firstNo = eq[0];
  var secondNo = eq[1];
  console.log(firstNo);
  console.log(secondNo);
  if (incldA === true) {
    document.getElementById("txt1").value =
      parseFloat(firstNo) + parseFloat(secondNo);
  } else if (incldS === true) {
    document.getElementById("txt1").value =
      parseFloat(firstNo) - parseFloat(secondNo);
  } else if (incldM === true) {
    document.getElementById("txt1").value =
      parseFloat(firstNo) * parseFloat(secondNo);
  } else if (incldD === true) {
    document.getElementById("txt1").value =
      parseFloat(firstNo) / parseFloat(secondNo);
  } 
};
