let button = document.querySelector("button");
let text = document.querySelector("input");
let textWindow = document.querySelector("div");
function showText() {
  textWindow.innerHTML = text.value;
  text.value = " ";
}
button.addEventListener("click", showText);
