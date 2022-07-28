function binaryToHexadecimalConvert() {
  var bin = document.getElementById("binary").value;
  var hex = parseInt(bin, 2).toString(16);
  document.getElementById("hexadecimal").value = hex;
}
function binaryToHexadecimalReset() {
  document.getElementById("binary").value = "";
  document.getElementById("hexadecimal").value = "";
}

//there ain't a method to convert binary to octal. that's why i convert the binary to decimal (by using parseInt), and then the decimal to octal (by using toString)
//yes, the same way as bin-oct. 🤦🏻 nerds