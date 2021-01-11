/*
How to create mergable stack?
https://www.geeksforgeeks.org/create-mergable-stack/

Use linked list for this implementation
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedElem = this.tail;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length -= 1;
    poppedElem.prev = null;
    return poppedElem;
  }
}

const mergeLists = (stack1, stack2) => {
  if (!stack1.head && !stack2.head) return undefined;
  if (!stack2.head) return stack1;

  if (!stack1.head) {
    stack1.head = stack2.head;
    stack1.tail = stack2.tail;
    stack1.length = stack2.length + stack1.length;
    return;
  } else {
    stack1.tail.next = stack2.head;
    stack2.head.prev = stack1.tail;
    stack1.tail = stack2.tail;
    stack1.length += stack2.length;
  }
};

let stack = new LinkedList();
let stack2 = new LinkedList();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack2.push(7);
stack2.push(8);
stack2.push(9);
stack2.push(10);
stack2.push(11);
stack2.push(12);

/*
console.log("hello", stack.pop().value);

console.log("hello", stack.pop());
console.log("hello", stack.pop());
console.log("hello", stack.pop());

console.log("hello", stack.pop());
console.log("hello", stack.pop());
console.log("hello", stack.pop());

console.log("hello", stack2.pop());

console.log("hello", stack2.pop());
console.log("hello", stack2.pop());
console.log("hello", stack2.pop());

console.log("hello", stack2.pop());
console.log("hello", stack2.pop());
console.log("hello", stack2.pop());
 */

mergeLists(stack, stack2);
console.log("hello", stack);

console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
console.log("hello", stack.pop().value);
