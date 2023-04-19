/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    if(nums.length === 1) return nums;

    //Find first unsorted element in decreasing order from last
    let point = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            point = i;
            break;
        }
    }  


    if ( point !== -1 ) {
        //Find first element greater than nums[point] from last
        let greater = -1;
        for (let i = nums.length - 1; i > point; i-- ) {
            if ( nums[i] > nums[point]) {
                greater = i;
                break;
            }
        }

        //Swap the nums[point] and nums[greater]
        let temp = nums[greater];
        nums[greater] = nums[point];
        nums[point] = temp;
    }
    //Make minimum the sequence starting from right of the point
    for (let i = nums.length - 1; i > point + 1; i--, point++ ) {
        let temp = nums[i];
        nums[i] = nums[point + 1];
        nums[point + 1] = temp;
    }

    return nums;
};