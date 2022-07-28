function decToBinaryConvert() {
  var hex = document.getElementById("hexadecimal").value;
  var dec = parseInt(hex, 16);
  document.getElementById("decimal").value = dec;
}
function decToBinaryReset() {
  document.getElementById("hexadecimal").value = "";
  document.getElementById("decimal").value = "";
}

//primary logic: stolen from decimal to binary conversion. updated to take an input as an octal, convert it to decimal, then the exact same logic
