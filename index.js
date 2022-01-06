console.log("this file is working");

const colors = ["blue", "red", "yellow", "black"];
let   colorIndex  = 0;

var node = document.getElementById('grid');


$(".block").click(function() {
  this.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
})