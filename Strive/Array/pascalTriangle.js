/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascalTriangle = [];
    pascalTriangle.push([1]);
    for (let i = 1; i < numRows; i++) {
        pascalTriangle[i] = [1];
        for (let j = 0; j < i - 1; j++) {
            pascalTriangle[i].push(pascalTriangle[i - 1][j] + pascalTriangle[i - 1][j + 1]);
        }
        pascalTriangle[i].push(1);
    }

    return pascalTriangle;
};