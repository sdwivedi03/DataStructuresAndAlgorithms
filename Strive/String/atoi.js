/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let number = 0;
    let sign = 1;
    let i = 0;
    while(s[i] === ' ') i++;
    if(s[i] === '-') {
        sign = -1;
        i++;
    } else if(s[i] === '+'){
        i++;
    }
    for(; i < s.length; i++){
        if(s.charCodeAt(i) < '0'.charCodeAt(0) || s.charCodeAt(i) > '9'.charCodeAt(0) ){
            break;
        }else{
            number = number*10 + s.charCodeAt(i) - '0'.charCodeAt(0);
        }
    }
    number = sign*number;
    if(number < -(2**31)) return -(2**31);
    if(number > 2**31 - 1) return (2**31 - 1)
    return number;
};