const repeatNumbers = function(data) {
  output = "";
  for (arr of data) {
    for (let i = 0; i < arr[1]; i++) {
      output += arr[0];
    }
    if (arr != data[data.length - 1]) {
      output+= ", "
    }
  }
  return output;
};