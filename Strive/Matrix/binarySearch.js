/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    for(let i = 0, j = m*n - 1; i <= j; ){
      let mid = Math.ceil((i + j) / 2);
      if (matrix[Math.floor(mid/n)][mid%n] === target ) {
        return true;
      }
      else if (matrix[Math.floor(mid/n)][mid%n] > target) {
          j = mid - 1;
      } else {
          i = mid + 1;
      }
  }  
  return false;
};