/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let p = 0;
    let q = 0;
    while(true) {
        p = nums[p];
        q = nums?.[nums[q]];
        if(p===q) break;
    }
    q = 0;

    while(p !== q) {
        p = nums[p];
        q = nums[q];
    }

    return p;
    
};