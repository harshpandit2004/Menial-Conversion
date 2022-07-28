function octalToHexadecimalConvert() {
  var oct = document.getElementById("octal").value;
  var hex = parseInt(oct, 8).toString(16);
  document.getElementById("hexadecimal").value = hex;
}
function octalToHexadecimalReset() {
  document.getElementById("octal").value = "";
  document.getElementById("hexadecimal").value = "";
}
