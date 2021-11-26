const squareCode = function(message) {
  let str = message.replaceAll(" ", ""); //remove spaces
  let code = "";

  let side = Math.ceil(Math.sqrt(str.length)); //we are coding a code box this is the side size

  for (j = 0 ; j < side; j ++) { //this loop gives the starting point for each word
    for (i = j; i < str.length; i += side) { //this loop writes each word
      code += str[i];
    }
    code += " ";
  }
  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));