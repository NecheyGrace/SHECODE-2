let count = 0;
const bgButton = document.querySelector("#bg-button");
const bodyBg = document.querySelector("body");
let colors = ['Aqua', 'Coral', 'pink',  'LightGreen', 'Orange', 'Silver'];
function changeBg() {
  bodyBg.style.background = colors[count];
  if (count < colors.length - 1) {
    count++;
  } else {
    count = 0;
  }
}