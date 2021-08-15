var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function setCanvasDim(height, width) {
  canvas.height = height || window.innerHeight - 4;
  canvas.width = width || window.innerWidth;
}
