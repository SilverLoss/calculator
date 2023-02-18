let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = "";
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "C") {
      screen.value = "";
    } else {
      screenValue += buttonText;    
      screen.value = screenValue;
    }
  });
}
