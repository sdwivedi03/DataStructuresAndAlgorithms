'use struct'

class LinkedListNode  {
    constructor(data){
        this.data = data;
        this.next = null;
    }
} 

export class LinkedList {
    constructor(array, startIndex = 1) {
        this.head = null;
        this.length = 0;
        this.startIndex = startIndex;
        if ( !Array.isArray( array ) ) return;
        array.forEach( e => this.insert(e));
    }

    /**
     * Inserts an element in the linked list at specefied postion
     * if the postion is not given insert element at the last of
     * linked list
     * @param {*} data | Any
     * @param {*} position | Integer
     */
    insert(data, position) {
        position = parseInt(position);
        if (!position || !this.head) {
            return this.insertAtLast(data);
        }

        if ( position > (this.length + this.startIndex - 1) || position < this.startIndex) {
            throw new Error('Invalid position');
        }

        const currentNode = this.getNthNode( position - 1 )

        if(!currentNode.next){
           return this.insertAtLast(data);
        }

        const newNode = new LinkedListNode(data);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;

    }

    getNthNode(n) {
        if ( !this.head ) return null;
        let p = this.head;
        while((n - this.startIndex) && p) {
            n--;
            p = p.next;
        }
        return p;
    }

    insertAtLast(data){
        if(!this.head) {
            this.head = new LinkedListNode(data);
        } else {
            let p = this.head
            while(p.next) p = p.next;
            p.next = new LinkedListNode(data);

        }
        this.length++;
        return this.head;
    }

    insertAtStart(data){
        const newNode = new LinkedListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.head;
    }

    print(){
        let list = '';
        let p = this.head;
        while(p.next) {
            list += p.data + ' -> ';
            p = p.next;
        }
        list += p.data;
        console.log(list);
    }

}
