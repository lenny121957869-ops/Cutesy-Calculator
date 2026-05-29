const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let currentValue = "";

function updateDisplay() {
  display.value = currentValue || "0";
}

function appendValue(value) {
  if (value === "." && currentValue.includes(".")) return;
  currentValue += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = new Function(`return ${currentValue}`)();
    currentValue = String(result);
  } catch (error) {
    currentValue = "Error";
  }
  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    appendValue(button.dataset.value);
  });
});

equalsButton.addEventListener("click", calculate);
clearButton.addEventListener("click", () => {
  currentValue = "";
  updateDisplay();
});

updateDisplay();
