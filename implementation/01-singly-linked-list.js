// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
        } else {
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

     
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (!this.head) {
            return undefined;
        } else {
            let temp = this.head;
            let newHead = this.head.next;
            this.head = newHead;
            this.length--;
            return temp;
        }

        // Write your hypothesis on the time complexity of this method here       
    }

    removeFromTail() {
        if(!this.head) return undefined;

        else {

            if(!this.head.next){
                let tmp = this.head;
                this.head = null;
                this.length--;
                return tmp;
            }

            let curr = this.head;
            
            while(curr.next.next){
                curr = curr.next;
            }

            let tmp = curr.next;
            curr.next = null;
            this.length--;
            return tmp;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (!this.head) return undefined;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        if (!this.head) return undefined;

        for (let i = this.head; i; i = i.next) {
            console.log(i.value);
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
