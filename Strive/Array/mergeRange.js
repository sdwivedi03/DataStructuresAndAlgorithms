/**
 * Solution 1 in O(n^2)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let unique = [];
    for (let i = 0; i < intervals.length; i++) {
        let found = false;
        for(let j = i + 1; j < intervals.length; j++){
            if(!(intervals[j][1] < intervals[i][0] 
                || intervals[j][0] > intervals[i][1])
            ){ 
                intervals[j][0] = Math.min(intervals[j][0],intervals[i][0]);
                intervals[j][1] = Math.max(intervals[j][1],intervals[i][1]);
                found = true;
                break;
            }
        }
        if (!found) unique.push([...intervals[i]]);
    }
    return unique;
};