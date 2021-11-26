const multiplicationTable = function(maxValue) {
let output = "";
for (i = 1; i <= maxValue; i++) {
  for (j = 1; j <= maxValue; j++) {
    output += j * i + " ";
  }
  output += "\n";
}
return output;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));