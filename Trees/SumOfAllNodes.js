/**
 * Sum of all nodes in a binary tree
https://www.geeksforgeeks.org/sum-nodes-binary-tree/
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left == null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (value > current.value) {
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    let find = false;
    while (current && !find) {
      if (value < current.value) {
        current = current.left;
      }
      if (value > current.value) {
        current = current.right;
      }
      if (value === current.value) {
        find = true;
      }
    }
    if (!find) return false;
    return current;
  }

  sum() {
    if (!this.root) return undefined;
    let queue = [];
    let node = this.root;
    let sum = 0;
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      sum += node.value;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return sum;
  }
}

let tree = new bst();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log("BFS", tree.sum());
