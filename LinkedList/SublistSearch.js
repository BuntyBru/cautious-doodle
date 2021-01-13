/**
 * Sublist Search (Search a linked list in another list)
    https://www.geeksforgeeks.org/sublist-search-search-a-linked-list-in-another-list
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
    if (!this.head) return undefined;

    let removedNode = this.head;
    let newTail = this.removedNode;

    while (removedNode.next != null) {
      newTail = removedNode;
      removedNode = removedNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    length -= 1;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return removedNode;
  }
}

let list1 = new LinkedList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);

let list2 = new LinkedList();
list2.push(1);
list2.push(2);
list2.push(1);
list2.push(2);
list2.push(3);
//list2.push(4);
console.log(list1);

const sublistSearch = (list1, list2) => {
  let matchNode = list1.head;
  let currentNode = list2.head;
  let ctr = 0;

  while (currentNode !== null && matchNode !== null) {
    if (currentNode.value == matchNode.value) {
      currentNode = currentNode.next;
      matchNode = matchNode.next;
      ctr += 1;
      if (ctr == list1.length) {
        return true;
      }
    } else {
      matchNode = list1.head;
      if (ctr == 0) {
        currentNode = currentNode.next;
      }
      ctr = 0;
    }
  }
  console.log(ctr);
  return false;
};

console.log(sublistSearch(list1, list2));
