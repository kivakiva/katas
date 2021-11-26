const calculateChange = function(total, cash) {
  let change = {}
  let diff = cash - total;

// create this array for our calculator function to reference

  let denominations = [
    ['twentyDollar', 2000],
    ['tenDollar', 1000],
    ['fiveDollar', 500],
    ['twoDollar', 200],
    ['oneDollar', 100],
    ['quarter', 25],
    ['dime', 10],
    ['nickel', 5],
    ['penny', 1]
  ]

  //helper function for calculating amount of each denomination
  // create a new property if required
  //loop until full

  function calc(denomination) {
    let x = 0
    if (diff >=denomination[1]) {
      while (diff >= denomination[1]) { //this doesn't have to be a loop, could be math.trunc?
        x ++;
        diff -= denomination[1];
      }
      change[denomination[0]] = x;
    }
  }
  //parent loop
  for (denomination of denominations) {
    calc(denomination);
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));