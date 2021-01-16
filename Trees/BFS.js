/**
 * BFS
 * Breadth First Search
 */

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left == null) {
            current.left = newNode;
          }
          current = current.left;
        } else {
          if (current.right == null) {
            current.right = newNode;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    let find = false;

    while (current && !find) {
      if (val < current.value) {
        current = current.value;
      } else if (val > current.value) {
        current = current.right;
      } else {
        find = true;
      }
    }

    if (!find) return null;
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
}

let bst = new BST();

bst.insert(10);
bst.insert(15);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.bfs());
