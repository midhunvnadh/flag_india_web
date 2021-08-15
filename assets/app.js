startFlag();

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute("href", text);
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const downloadImage = () => {
  var canvas = document.getElementById("canvas");
  var img = canvas.toDataURL("image/png");
  download("flag.png", img);
};
