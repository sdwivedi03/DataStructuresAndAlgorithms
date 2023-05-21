/**
 * Sorting before searching 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let count = 1;
    maxCount = -Infinity;
    nums.sort((a,b) => a - b);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1] + 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
};