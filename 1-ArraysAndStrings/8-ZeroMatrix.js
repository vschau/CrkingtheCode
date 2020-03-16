// Zero Matrix:  Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
// 1 2 3 4   1 0 0 4
// 1 1 1 1 > 1 0 0 1
// 1 0 1 1 > 0 0 0 0
// 1 1 0 1   0 0 0 0

function zeroMatrix(matrix) {
  let M = matrix.length;
  let N = matrix[0].length;
  let row = Array(M).fill(false);
  let col = Array(N).fill(false);

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }    
  }

  // Nulify rows
  for (let i = 0; i < row.length; i++) {
    if (row[i]) matrix[i] = Array(N).fill(0);
  }

  // Nulify columns
  for (let i = 0; i < col.length; i++) {
    if (col[i]) {
      for (let j = 0; j < M; j++) {
        matrix[j][i] = 0;
      }
    }
  }
}

let matrix = [[1,2,3,4,5], [1,2,3,4,5], [5,0,7,8,9], [1,2,1,4,5], [1,2,3,4,0]]
console.log('Original', matrix);
zeroMatrix(matrix);
console.log('Nulified', matrix);