const camelCase = function(input) {
let output = "";
for (let i = 0; i < input.length; i++) {
  // if space skip space and add uppercase and skip next
  if (input[i] === " ") {
    output += input[i +1].toUpperCase();
    i ++
  }
  else {
    // otherwise add
    output += input[i];
  }
}
return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));