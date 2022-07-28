function binaryToDecimalConvert() {
  var bin = document.getElementById("binary").value;
  var dec = parseInt(bin, 2);
  document.getElementById("decimal").value = dec;
}
function binaryToDecimalReset() {
  document.getElementById("decimal").value = "";
  document.getElementById("binary").value = "";
}
