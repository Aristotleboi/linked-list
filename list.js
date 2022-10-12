

class linkedList {
    constructor(list) {
        this.head = null
        this.currentNode = null
        this.length = 0
    }
    append(value) {
        const newNode = new node(value);
        const currentEndNode = this.tail();
        currentEndNode.next = newNode;
        this.length = this.length + 1
    }

    prepend(value) {
        const newNode = new node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length = this.length + 1
    }

    returnHead() {
        return this.head;
    }

    tail() {
        if (this.head === null) return this.head
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        return current

    }

    at(index) {
        let current = this.head
        for(let i = 1; i < index; i++) {
            current = current.next
            if (current === null) {
                return "null"
            }
        }
        return current
    }

    pop() {
        let newLastNode = this.at(this.length - 1)
        newLastNode.next = null
        list.length = list.length - 1;
    }

    find(value) {
        let currentNodeValue = this.head.value
        let current = this.head
        while(value !== currentNodeValue) {
            current = current.next
            if (current === null) return 'could not find value';
            currentNodeValue = current.value;
        }
        return current
    }

    insertAt(value, index) {
        const newNode = new node(value);
        let indexNode = this.at(index - 1);
        console.log(indexNode)
        newNode.next = indexNode.next;
        indexNode.next = newNode
    }

    removeAt(index) {
        let current = this.at(index);
        let previous = this.at(index - 1);
        previous.next = current.next;
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
list.append(120)
list.print()
list.insertAt(420, 2)
list.print()
list.removeAt(2)
list.print()

