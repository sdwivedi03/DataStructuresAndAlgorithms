/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let p = list1;
    let q = list2;
    let head = new ListNode();
    let l = head;
    while(p && q){
        if(p.val > q.val){
            l.next = new ListNode(q.val);
            q = q.next;   
        }else{
            l.next = new ListNode(p.val);
            p = p.next;
        }
        l = l.next;
    }

    while(p){
        l.next = new ListNode(p.val);
        p = p.next; 
        l = l.next;
   
    }
    while(q){
        l.next = new ListNode(q.val);
        q = q.next;  
        l = l.next;
  
    }
    return head.next;
};

module.exports = mergeTwoLists;