function decToOctConvert() {
  var dec = document.getElementById("decimal").value;
  var oct =  Math.abs(dec).toString(8);
  document.getElementById("oct").value = oct;
}
function decToOctReset() {
  document.getElementById("decimal").value = "";
  document.getElementById("oct").value = "";
}
