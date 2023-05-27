const merge = require('./mergeSortedList')
function flatten(head){
    //your code here
    let p = head.next;
    let newHead = head;
    while(p){
        newHead = merge(newHead, p)
        p = p.next;
    }
    return newHead;
}