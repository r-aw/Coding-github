function clearContent(clearC) {
  document.getElementById("updateDisplay").textContent = "";
}

function changeNumber(n) {
  //document.querySelector(".display").innerHTML = "";
  result = n;
  document.querySelector(".display").textContent += n;
  console.log(n.value);
  if (n > 7) {
    console.log(clear);
  }
}

function calculate() {
  sum = eval();
  console.log(sum);
}

function operators() {}
