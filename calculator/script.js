function clearContent(clearC) {
  document.getElementById("updateDisplay").textContent = "";
}

function changeNumber(n) {
  const display = document.getElementById("updateDisplay");
  if (display.textContent.length < 9) {
    display.textContent += n;
  }
}

function calculate() {
  sum = eval();
  console.log(sum);
}

function operators() {}

document.getElementById("updateDisplay").addEventListener("input", function () {
  if (this.value.length > 9) {
    this.value = this.value.slice(0, 9);
  }
});
