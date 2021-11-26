const conditionalSum = function(values, condition) {
  //variable to identify odd or even
  let exclude = true;
  if (condition === "odd") {
    exclude = false;
  }
  for (let j = 0; j < values.length; j++) {
    //remove elements that do not match
    if (values[j]%2 == exclude) {
      values.splice(j, 1);
    }
  }
  let answer = 0;
  if (values.length > 0) {
    for (let i = 0; i < values.length; i++) {
      answer += values[i]; 
    }
  }
  else {
    answer = 0;
  }
  return answer;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));