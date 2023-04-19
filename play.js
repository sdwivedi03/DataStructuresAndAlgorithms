let input = [];
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    input.push(data.trim());    
});

process.stdin.on('end', () => {

    const s1 = input[0];
    const s2 = input[1];
    const s = solution(s1, s2);
    
    console.log(s);
})

function solution(s1, s2){
    
    let s = new Array(s1.length + s2.length - 1).fill('x');
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] !== 'T') continue;
        for (let j = 0; j < s1.length; j++) {
            if(s[i + j] === 'x') s[i + j] = s1[j];
            else if (s[i + j] !== s1[j]) return -1;
        }
    }



    for (let i = 0; i < s2.length; i++) {
        let mismatch = false;
        let toBefilledAt = -1;
        if (s2[i] !== 'F') continue;
        toBefilledAt = -1;
        for (let j = 0; j < s1.length; j++) {
            if(s[i + j] === 'x') {
                if(toBefilledAt === -1) toBefilledAt = i + j;
                else {
                    s[toBefilledAt] = 'A';
                    toBefilledAt = i + j;
                    mismatch = true;
                }
            } else if (s[i + j] !== s1[j]) mismatch = true;
        }
        if (toBefilledAt !== -1) {
            if (mismatch) s[toBefilledAt] = 'A';
            else {
                mismatch = true;
                s[toBefilledAt] = s1[toBefilledAt - i] === 'A' ? 'B' : 'A';
            }
        } 
        if (!mismatch) return -1;
    }
    return s.join('');
}