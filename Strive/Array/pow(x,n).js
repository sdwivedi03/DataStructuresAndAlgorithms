/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let positiveN = Math.abs(n);
    let res = 1;
    while(positiveN){
        if(positiveN & 1){
            res *= x;
            positiveN &= -2;

        } else {
            x *= x;
            positiveN >>>= 1;
        }
    }
    return n < 0 ? 1 / res : res;
};