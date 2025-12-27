
let display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = "0";
  }
}

function calculateResult() {
  display.value = eval(display.value);
}

/* Keyboard Support */
document.addEventListener("keydown", function (event) {
  let key = event.key;

  if ((key >= "0" && key <= "9") || key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
    appendValue(key);
  }

  if (key === "Enter" || key === "=") {
    calculateResult();
  }

  if (key === "Backspace") {
    deleteLast();
  }

  if (key === "Escape") {
    clearDisplay();
  }
});
