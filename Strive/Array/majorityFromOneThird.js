/**
 * Optimal solution O(n) time and O(1) space
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let c1 = 0, c2 = 0;
    let m1,m2;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === m1){
            c1++;
        }else if(nums[i] === m2){
            c2++;
        }else if(c1 === 0){
            m1 = nums[i];
            c1++;
        }else if(c2 === 0){
            m2 = nums[i];
            c2++;
        }else {
            c1--;
            c2--;
        }
    }
    c1 = c2 = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === m1){
            c1++;
        }
        if(nums[i] === m2){
            c2++;
        }
    }

    const majority = [];
    if(c1 > nums.length / 3) majority.push(m1);
    if(c2 > nums.length / 3) majority.push(m2);

    return majority;
};