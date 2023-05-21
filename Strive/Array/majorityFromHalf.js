/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let majority;
    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            majority = nums[i];
            count++;
        }
        else if(majority === nums[i]){
            count++;
        }else {
            count--;
        }
    }
    return majority;
};