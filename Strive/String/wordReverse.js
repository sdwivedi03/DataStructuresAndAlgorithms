/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reversed =  '';
    let word = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' '){

            if(word !== '' ) {
                if (reversed !== '') reversed += ' ';
                reversed = reversed +  word;
                word = '';
            }
        }else {
            word = s[i] + word;
        }
    }
    if(word !== '' ) {
        if (reversed !== '') reversed += ' ';
        reversed = reversed +  word;
    }
    return reversed;
};