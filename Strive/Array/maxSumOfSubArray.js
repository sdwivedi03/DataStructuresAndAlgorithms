/**
 * Solution1: Generate all the sub arrays and pick maximum among them 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
};


/**
 * Solution2: Sum elements untill sum is positive 
 * otherwise assign sum with current element
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function(nums) {
    let maxSum = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(sum < 0){
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        if (sum > maxSum) maxSum = sum;

    }
    return maxSum;
};