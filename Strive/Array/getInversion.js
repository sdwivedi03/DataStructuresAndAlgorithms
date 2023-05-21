
/**
 * Solution 1 take O(n^2) to execute
 * @param {Number} arr 
 * @param {Number} n 
 * @returns 
 */
function getInversion(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++) {
            if (parseInt(arr[i]) > parseInt(arr[j])) {
                count++;
            }
        }   
    }
    return count;
}

/**
 * Solution 1 take O(nlogn) to execute and n size of space
 * @param {Number} arr 
 * @param {Number} n 
 * @returns 
 */
function getInversion(arr, start, end) {
    let count = 0;
    if (start === end) return 0;
    let mid = Math.floor((end + start) / 2);
    count += getInversion(arr, start, mid);
    count += getInversion(arr, mid + 1, end);
    count += merge(arr, start, mid, mid + 1, end);
    return count;
}

function merge(arr, start1, end1, start2, end2) {
    let aux = [];
    let c = 0;
    let i = start1, j = start2;
    while (i <= end1 && j <= end2) {
        if (parseInt(arr[i]) <= parseInt(arr[j])) {
            aux.push(arr[i++]);
        } else {
            aux.push(arr[j++]);
            //this the place from element 
            //right to it is greater than a[i]
            c += (end1 - i + 1);
        }
    }

    while (i <= end1) aux.push(arr[i++]);
    while (j <= end2) aux.push(arr[j++]);
    for (let index = 0; index < aux.length; index++)
        arr[index + start1] = aux[index];

    return c;
    
}