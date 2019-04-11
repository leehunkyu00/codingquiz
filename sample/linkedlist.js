class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
        this.curNode = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);

        if (this.root == null) {
            this.root = node;
            this.curNode = node;
        } else {
            this.curNode.next = node;
            this.curNode = node;
        }

        this.size += 1;
    }

    pop() {
        let walker = this.root;
        let res = -1;

        if (walker && walker.next === null ) {
            res = walker.data;
            this.size -= 1;

            this.root = null;
            this.curNode = null;
        } else {
            while(walker) {
                if (walker.next === this.curNode) {
                    res = this.curNode.data;
                    this.size -= 1;

                    this.curNode = walker;
                    walker.next = null;
                    break;
                }
                walker = walker.next;
            }
        }

        return res;
    }

    printall() {
        let walker = this.root;

        console.log("=======printall START");
        while(walker) {
            console.log(walker.data);

            walker = walker.next;
        }
        console.log("=======printall END");
    }

    size() {
        return this.size;
    }
}

let linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.printall();
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
console.log("pop data : ", linkedList.pop(), "last size : ", linkedList.size);
linkedList.printall();
