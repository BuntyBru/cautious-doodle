/*
Design a stack with operations on middle element
https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/
1) push() which adds an element to the top of stack.
2) pop() which removes an element from top of stack.
3) findMiddle() which will return middle element of the stack.
4) deleteMiddle() which will delete the middle element.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.mid = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.mid = newNode;
      // this.length+=1;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      // this.length+=1;
      if (this.length % 2 !== 0) {
        this.mid = this.mid.next;
      }
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.mid = null;
    } else {
      let temp = this.tail.prev;
      this.tail = temp;
      this.tail.next = null;
      if (this.length % 2 == 0) {
        this.mid = this.mid.prev;
      }
    }
    this.length -= 1;

    return poppedNode.value;
  }

  getMid() {
    if (!this.mid) return undefined;
    return this.mid;
  }

  delMid() {
    if (!this.mid) return undefined;
    let t = this.mid;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.mid = null;
    } else {
      this.mid.prev.next = this.mid.next;
      this.mid.next.prev = this.mid.prev;
      if (this.length % 2 == 0) {
        this.mid = this.mid.prev;
      } else {
        this.mid = this.mid.next;
      }
    }

    this.length -= 1;

    return t.value;
  }
}

let stack = new Stack();

stack.push(11);
stack.push(22);
stack.push(31);
stack.push(14);
stack.push(51);
stack.push(61);
stack.push(41);
console.log("Middle elem", stack.getMid().value);
console.log(stack.delMid());
console.log(stack.delMid());
console.log(stack.delMid());

stack.push(4);
stack.push(5);

console.log("Middle elem", stack.getMid().value, stack.length);
