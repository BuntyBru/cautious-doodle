/**
 * Linked List
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

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
    if (!this.head) return undefined;
    let current = this.head;
    let newtail = current;

    while (current.next != null) {
      newtail = current;
      current = current.next;
    }

    this.tail = newtail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length == 0) {
      this.tail = null;
    }

    return temp;
  }
}
