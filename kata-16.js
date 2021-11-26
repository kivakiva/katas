const makeCase = function(string, bases) {
  let output = "";
  let vowel = "aeiou"
  let x = 1 //looping variable
  let input = string //assign it so it can be modified for loops
  let base = bases //assign it so the function can read it as an array or not

  //only loop if array
  if (Array.isArray(bases)) {
    x = bases.length;
  }


  for (j = 0; j < x; j++) {

    // if array look at correct base
    if (Array.isArray(bases)) {
      base = bases[j];
    }


    // camel

    if (base === "camel") {
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
      // return output;
    }

    //pascal

    if (base === "pascal") {
      for (let i = 0; i < input.length; i++) {
        // if space skip space and add uppercase and skip next
        if (input[i] === " ") {
          output += input[i +1].toUpperCase();
          i ++
        }
        else if (i === 0) {
          output += input[i].toUpperCase();
        }
        else {
          // otherwise add
          output += input[i];
        }
      }
      // return output;
    }

    //base 

    if (base === "snake") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += "_";
        }
          else {
            // otherwise add
            output += input[i];
        }
      }
      // return output;
    }

    //kebab

    if (base === "kebab") {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += "-";
        }

        else {
          // otherwise add
          output += input[i];
        }
      } 
      // return output;
    }

    //title

    if (base === "title") {

      for (let i = 0; i < input.length; i++) {

        if (i === 0 || input[i - 1] === " ") {
          output += input[i].toUpperCase();
        }

        else {
          // otherwise add
          output += input[i];
        }
      }
      // return output;
    }

    //vowel

    if (base === "vowel") {
      for (let i = 0; i < input.length; i++) {
        let test = false
        for (vowe of vowel) {
          if (input[i] === vowe) {
            test = true;
          }
        }
        if (test == true) {
            output += input[i].toUpperCase();
        }

        else {
          // otherwise add
          output += input[i];
        }
      }
      // return output;
    }

    //consonant

    if (base === "consonant") {
      for (let i = 0; i < input.length; i++) {
        let test = false
        for (vowe of vowel) {
          if (input[i] === vowe) {
            test = true;
          }
        }
        if (test == false) {
            output += input[i].toUpperCase();
        }

        else {
          // otherwise add
          output += input[i];
        }
      }
      // return output;
    }

    //upper

    if (base === "upper") {
      for (let i = 0; i < input.length; i++) {
        output += input[i].toUpperCase();
      }
    }

    //lower

    if (base === "lower") {

      for (let i = 0; i < input.length; i++) {
        output += input[i].toLowerCase();
      }
    }
    
    //if we have another iteration 
    //make our output our input
    //reset out output for next loop
    if (j + 1 < x ) {
      input = output;
      output = "";
    }
  }
return output;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));