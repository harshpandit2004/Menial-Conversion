function hexadecimalToOctalConvert() {
  var hex = document.getElementById("hexadecimal").value;
  var oct = parseInt(hex, 16).toString(8);
  document.getElementById("octal").value = oct;
}
function hexadecimalToOctalReset() {
  document.getElementById("hexadecimal").value = "";
  document.getElementById("octal").value = "";
}

//primary logic: stolen from decimal to binary conversion. updated to take an input as an octal, convert it to decimal, then the exact same logic
