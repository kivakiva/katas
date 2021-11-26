const whereCanIPark = function (spots, vehicle) {
  let parking = [];
  // vehicle check
    function match(x) {
      if (vehicle === 'small') {
        return (x === "R" || x === "S" ? true : false);
      }
      else if (vehicle === 'regular') {
          return (x === "R" ? true : false);
      }
      else if (vehicle === 'motorcycle') {
            return (x === "R" || x === "S" || x === "M" ? true : false);
      }
    }
    // spot check
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (match(spots[i][j]) === true)
      {
        return parking = [j, i];
      }
    }
  }
  // return
  if (parking.length > 0) {
    return parking;
  }
  else {return false}
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
