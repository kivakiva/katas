function generateBoard(wQ, bQ) {
  
  let arr1 = [];
  
  let k = wQ[0];
  let j = wQ[1];
  let l = bQ[0];
  let m = bQ[1];

  for (i = 0; i < 8; i++) {
    let arr8 = [0, 0, 0, 0, 0, 0, 0, 0];
    if (i === k) {
      arr8.splice(j, 1, 1);
    }
    if (i === l) {
      arr8.splice(m, 1, 1);
    }
    arr1.push(arr8);
  }  
  return arr1;
}


function queenThreat(board) {
  let q1 = [];
  let q2 = [];
  let threat = false

  //find queens
  for (let i = 0; i < 8; i++) {
    let arr = board[i];
    for (let j = 0; j < 8; j++) {
      if (arr[j] === 1) {
        if (q1.length === 0) { 
          q1 =[i, j];
        }
        else {q2 = [i, j];
        }
      }
    }
  }

  // queen threat if same row same column
  if (q1[0] === q2[0]) {
    threat = true;
  }
  if (q1[1] === q2[1]) {
    threat = true;
  }
  
  //same diagonal: diagonals either have the same sum or the same difference
  if (q2[1] - q2[0] === q1[1] - q1[0] || q2[1] + q2[0] === q1[1] + q1[0]) {
    threat = true;
  }
return threat;
}



let whiteQueen = [0, 0];
let blackQueen = [0, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));