/*
Design and Implement Special Stack Data Structure | Added Space Optimized Version
https://www.geeksforgeeks.org/design-and-implement-special-stack-data-structure/
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

  push(value) {
    let newNode = new Node(value);
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

  getTop() {
    if (!this.head) return undefined;
    return this.head.value;
  }
}

class SpecialStack {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  push(value) {
    if (this.s1.length == 0 && this.s2.length == 0) {
      this.s1.push(value);
      this.s2.push(value);
    } else {
      this.s1.push(value);
      if (value < this.s2.getTop()) {
        this.s2.push(value);
      } else {
        this.s2.push(this.s2.getTop());
      }
    }
  }
  pop() {
    if (!this.s1.head) return undefined;
    let t = this.s1.pop();
    this.s2.pop();
    return t;
  }

  isEmpty() {
    if (!this.s1.head) return true;
    return false;
  }

  logger() {
    console.log("S1", this.s1, this.s2);
  }

  getMin() {
    if (!this.s2.head) return undefined;
    return this.s2.getTop();
  }
}

let stack = new SpecialStack();
stack.push(18);
stack.push(13);
stack.push(19);
stack.push(29);
stack.push(14);
stack.push(15);
stack.push(16);

console.log(stack.getMin());
stack.pop();
stack.pop();
stack.pop();

console.log(stack.getMin());
