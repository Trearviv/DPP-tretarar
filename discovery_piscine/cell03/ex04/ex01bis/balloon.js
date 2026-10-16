const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let size = 200;
let colorindex = 0;
function updateBalloonStyle(){
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorindex];
}
balloon.addEventListener("click", function () {
  size +=10;
  if (size > 420) {
    size = 200;
  }
  colorindex = (colorindex + 1) % colors.length;
    updateBalloonStyle();
});

balloon.addEventListener("mouseleave", function () {
  // runs when the mouse leaves the div
  if (size > 200) {
    size -= 5;
   
  }
   colorindex = (colorindex -1 +3) % colors.length;
   updateBalloonStyle();
});