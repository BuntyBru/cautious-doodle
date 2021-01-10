/*
Queue using stacks
https://www.geeksforgeeks.org/queue-using-stacks/
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length += 1;
    }

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    if (this.head == this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length -= 1;

    return temp.value;
  }
}

class QS {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    this.s1.push(value);
  }

  dequeue() {
    if (this.s1.length == 0 && this.s2.length == 0) return undefined;

    if (this.s2.length == 0) {
      while (this.s1.length !== 1) {
        this.s2.push(this.s1.pop());
      }

      return this.s1.pop();
    } else {
      return this.s2.pop();
    }
  }
}

let tam = new QS();
tam.enqueue(10);
tam.enqueue(20);
tam.enqueue(30);
tam.enqueue(40);
tam.enqueue(50);
tam.enqueue(60);

console.log(tam);

console.log("Dequeue", tam.dequeue());
console.log("Dequeue", tam.dequeue());
tam.enqueue(70);
console.log("Dequeue", tam.dequeue());
console.log("Dequeue", tam.dequeue());
console.log("Last read", tam);
console.log("Dequeue", tam.dequeue());
