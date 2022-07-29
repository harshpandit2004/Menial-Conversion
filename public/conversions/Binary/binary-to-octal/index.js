function binaryToOctalConvert() {
  var bin = document.getElementById("binary").value;
  var oct = parseInt(bin, 2).toString(8);
  document.getElementById("octal").value = oct;
}
function binaryToOctalReset() {
  document.getElementById("octal").value = "";
  document.getElementById("binary").value = "";
}

//there ain't a method to convert binary to octal. that's why i convert the binary to decimal (by using parseInt), and then the decimal to octal (by using toString)
