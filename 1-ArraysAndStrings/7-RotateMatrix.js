// Rotate an NxN matrix by 90 degree in place
// 1 2 3 4     e a 5 1
// 5 6 7 8  >  f b 6 2
// a b c d  >  g c 7 3
// e f g h     h d 8 4

// 1(0,0) <- e(3,0) <- h(3,3) <- 4(0,3)
// 2(0,1) <- a(2,0) <- g(3,2) <- 8(1,3)
// Solution: Do it layer by layer.  For each pixel in the layer, rotate 4 together each iteration.

function rotate(matrix) {
  let n = matrix.length;
  // iterate through layers (aka the squares).  There're 2 in a 4x4 matrix
  for (let x = 0; x < n/2; x++) {
    // need to -1 because we don't need to rotate element at y=n-x.  It's rotated with y=x
    for (let y = x; y < n - x - 1; y++) {
      let top = matrix[x][y]; // store top
      matrix[x][y] = matrix[n - y - 1][x]; // left -> top
      matrix[n - y - 1][x] = matrix[n - x - 1][n - y - 1]; // bottom -> left
      matrix[n - x - 1][n - y - 1] = matrix[y][n - x -1]; // right -> bottom
      matrix[y][n - x -1] = top ; // top -> right
    }
  }
}

let matrix = [[1,2,3,4], [5,6,7,8], ['a','b','c','d'], ['e','f','g','h']]
console.log('Original', matrix);
rotate(matrix);
console.log('Rotated', matrix);