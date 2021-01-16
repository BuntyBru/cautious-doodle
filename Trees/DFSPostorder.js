/**
 * Depth First Search
 * Post order
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
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
      if (value < this.root.value) {
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
      } else if (value > current.value) {
        current = current.right;
      } else if (value == current.value) {
        find = true;
      }
    }
    if (!find) return undefined;

    return current;
  }

  bfs() {
    if (!this.root) return undefined;
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  dfsPreorder() {
    if (!this.root) return undefined;

    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    if (!this.root) return undefined;

    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bfs());
console.log(tree.dfsPreorder());
console.log(tree.dfsPostOrder());
