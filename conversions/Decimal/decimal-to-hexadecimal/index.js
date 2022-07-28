function decTohexConvert() {
  var dec = document.getElementById("decimal").value;
  var hex =  Math.abs(dec).toString(16);
  document.getElementById("hex").value = hex;
}
function decTohexReset() {
  document.getElementById("decimal").value = "";
  document.getElementById("hex").value = "";
}
