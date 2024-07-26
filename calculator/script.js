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
  const display = document.getElementById("updateDisplay");
  try {
    display.textContent = eval(
      display.textContent.replace("×", "*").replace("÷", "/")
    );
  } catch (e) {
    display.textContent = "Error";
  }
}

function operators() {}

document.getElementById("updateDisplay").addEventListener("input", function () {
  if (this.value.length > 9) {
    this.value = this.value.slice(0, 9);
  }
});
