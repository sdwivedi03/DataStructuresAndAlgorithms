/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let p = head;
    let q = head;
    do{
        p = p?.next;
        q = q?.next?.next;
    }while(p !== q);

    if(!p || !q) return null;

    q = head;
    while(p !== q){
        p = p.next;
        q = q.next;
    }
    return p;
};