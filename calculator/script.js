function clearContent(clearC) {
  document.getElementById("updateDisplay").innerText = "";
}

function changeNumber(n) {
  //document.querySelector(".display").innerHTML = "";
  result = n;
  document.querySelector(".display").innerText += n;
}

function calculate() {
  sum = eval();
  console.log(sum);
}

function operators() { }
