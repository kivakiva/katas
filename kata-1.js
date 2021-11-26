const sumLargestNumbers = function(data) {

  let answer = "";
if (data.length >= 2) {
    let int1 = data[0];
    let int2 = data[1];
    for (let i = 2; i < data.length; i++) {
      // each time we find a higher number we assign it to int2
      // and the previously highest number gets assigned to int1
      if (int2 < data[i]) {
        // check for edge case where 1st number is highest
        if (int1 < int2) {
          int1 = int2;
        }
        int2 = data[i];
      }
      //edge case: 2nd number is highest
      else if (int1 < data[i]) {
        int1 = data[i];
      }
    }
    answer = int1 + int2;
  }
  else {
    answer = "Cannot sum input";
  }
  return answer;
};

//console.log(sumLargestNumbers([1, 10]));
//console.log(sumLargestNumbers([1, 2, 3]));
//console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));