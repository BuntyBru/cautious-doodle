/**
 * Depth First Search
 */
class Node {
  constructor(val) {
    this.value = val;
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
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === val) return undefined;
      if (val < current.value) {
        if (current.left == null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (val > current.value) {
        if (current.right == null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    let find = false;

    while (current && !false) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else if (val == current.value) {
        find = true;
      }
    }
    if (!find) return undefined;
    return current;
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
}

let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst);

console.log(bst.dfsPreorder());
