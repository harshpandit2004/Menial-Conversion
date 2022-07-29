function octalToDecimalConvert() {
  var oct = document.getElementById("octal").value;
  var dec =  parseInt(oct, 8);
  document.getElementById("decimal").value = dec;
}
function octalToDecimalReset() {
  document.getElementById("octal").value = "";
  document.getElementById("decimal").value = "";
}
