/**
 * Function to check if a singly linked list is palindrome
 * https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let poppedNode = this.head;
    let newTail = poppedNode;

    while (poppedNode.next !== null) {
      newTail = poppedNode;
      poppedNode = poppedNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return removedNode;
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
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;

    let poppedNode = this.head;
    if (this.head == this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;

    this.length -= 1;
    return poppedNode.value;
  }
  top() {
    if (!this.head) return null;
    return this.head.value;
  }
}

let linkedList = new LinkedList();

linkedList.push("K");
linkedList.push("A");
linkedList.push("Y");
linkedList.push("A");
linkedList.push("K");

const checkPalin = linkedList => {
  let stack = new Stack();
  if (linkedList.head !== null) {
    let cNode = linkedList.head;

    while (cNode !== null) {
      stack.push(cNode.value);
      cNode = cNode.next;
    }
    cNode = linkedList.head;
    while (stack.length !== 0) {
      if (stack.top() == cNode.value) {
        stack.pop();
        cNode = cNode.next;
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(checkPalin(linkedList));
