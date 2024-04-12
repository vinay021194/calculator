function appendToDisplay(value) {
  document.getElementById("display").value += value;
}
function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let expression = document.getElementById("display").value;
  let result = eval(expression);
  document.getElementById("display").value = result;
}
let isColorToggled = false;
function toggleColor() {
  isColorToggled = !isColorToggled;
  const display = document.getElementById("display");
  display.disabled = !isColorToggled;
  display.style.backgroundColor = isColorToggled ? "skyblue" : "#ccc";
  document.getElementById("toggleButton").textContent = isColorToggled
    ? "OFF"
    : "ON";
  const buttons = document.querySelectorAll(
    ".calculator button:not(#toggleButton)"
  );
  buttons.forEach((button) => {
    button.disabled = !isColorToggled;
  });
}
