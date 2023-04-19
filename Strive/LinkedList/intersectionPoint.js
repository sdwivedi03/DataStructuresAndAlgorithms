/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA;
    let q = headB;
    while(p && q) {
        p = p.next;
        q = q.next;
    }
    if(p){
        let c = p;
        p = headA;
        q = headB;
        while(c){
            p = p.next;
            c = c.next;
        }
    } else {
        let c = q;
        p = headA;
        q = headB;
        while(c){
            q = q.next;
            c = c.next;
        }
    }

    while(p && q){
        if(p === q) return p;
        p = p.next;
        q = q.next;
    }

    return null;
};