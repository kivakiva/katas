let prompt = require("prompt-sync")();
let again = "Y";
let answer = 0;
function newNum() {
  return Math.floor(Math.random() * 6)
}
let repeat = false
let arr1 = [] // this array logs the history
function repeats() {
  repeat = false
  for (let i = 0; i < arr1.length; i++) {
    if (answer == arr1[i]) {
      repeat = true;
    }
  }
}


let num = newNum(); //generate random number


while (again == "Y" || again == "y") { //loop until correct

  answer = prompt("Guess a whole number between zero and five: ");

  //input answer

  answer = Number(answer); //convert to number

  repeats();
  if (repeat === true) { //don't guess twice
    console.log("You have already guessed " + answer);

  } else if (Number.isInteger(answer) != true) { // only integers
    console.log("Please input an integer");

  } else if (answer > num) {
    console.log(answer + " is too high!");
    arr1.push(answer)

  } else if (answer < num) {
    console.log(answer + " is too low!");
    arr1.push(answer)

  } else if (answer == num) { //correct
    arr1.push(answer)
    console.log(answer + " is correct.\nYou succeeded with " + arr1.length + " attempts.");
    num = newNum();
    arr1 = []; // clear history
    again = prompt("Play again? [Y/N]: ");

    // input "again"

  }
}
prompt("Have a nice day."); // exit