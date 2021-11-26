const blocksAway = function(directions) {
  let obj = {
    east: 0,
    north: 0
  }
  for (let i = 0; i < directions.length; i += 2) { //convert L R ==> N S E W
    if (i === 0) { //first step
      if (directions[i] === "right") {
        directions[i] = "e";
      }
      if (directions[i] === "left") {
        directions[i] = "n";
      }
    }
    else { //later steps
      if (directions[i] === "right") {//right 
        if (directions [i -2] === "n") {directions[i] = "e"};
        if (directions [i -2] === "e") {directions[i] = "s"};
        if (directions [i -2] === "s") {directions[i] = "w"};
        if (directions [i -2] === "w") {directions[i] = "n"};
      }
      else if (directions[i] === "left") {//left 
        if (directions [i -2] === "n") {directions[i] = "w"};
        if (directions [i -2] === "e") {directions[i] = "n"};
        if (directions [i -2] === "s") {directions[i] = "e"};
        if (directions [i -2] === "w") {directions[i] = "s"};
      }
    }
  }
  for (let i = 0; i < directions.length; i += 2) { //accumulate
    if (directions[i] === "n") {obj.north += directions[i +1]};
    if (directions[i] === "s") {obj.north -= directions[i +1]};
    if (directions[i] === "e") {obj.east += directions[i +1]};
    if (directions[i] === "w") {obj.east -= directions[i +1]};
  }
  return obj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));