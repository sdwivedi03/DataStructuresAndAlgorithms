/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let k = 0;
    while (k <= j) {
        if (nums[k] === 0) {
            if (i === k) {
                i++;
                k++;
            } else {
                let temp = nums[k];
                nums[k] = nums[i];
                nums[i] = temp;
                i++;
            }
        } else if (nums[k] === 1) {
            k++;
        } else {
            let temp = nums[k];
            nums[k] = nums[j];
            nums[j] = temp;
            j--;
        }
    } 
};