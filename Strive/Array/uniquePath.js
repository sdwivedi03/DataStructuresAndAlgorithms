/**
 * Solution using recursion
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return path(0, 0, m - 1,n - 1);
};

function path(i, j, m, n){
    if( i === m || j === n ) return 1;
    return path(i + 1, j, m, n) + path(i, j + 1, m, n);
}


/**
 * Apply dynamic programming to optimize solution
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const grid = new Array(m);
    for(let i = 0; i < m; i++){
        grid[i] = new Array(n).fill(0);
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i === 0 || j === 0) grid[i][j] = 1;
            else grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
        }
    }
    return grid[m - 1][n - 1];
};


