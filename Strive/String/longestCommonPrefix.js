/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let len = Math.max(prefix.length, strs[i].length);
        let j = 0;
        while(j < len){
            if(prefix[j] === strs[i][j]) {
                j++;
            }else {
                break;
            }
        }
        prefix = prefix.slice(0, j)
    }
    return prefix;
};