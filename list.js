

class linkedList {
    constructor(list) {
        this.head = null
        this.currentNode = null
    }
    prepend(value) {
        const newNode = new node(value)
        newNode.next = this.head;
        this.head = newNode;
    }
    tail() {
        if (this.head === null) return this.head
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        return current

    }
    print() {
        let output = '';
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `;
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

const list = new linkedList("date");

list.prepend(60)
list.prepend(99)
console.log(list.tail())
console.log(list)
list.print()
