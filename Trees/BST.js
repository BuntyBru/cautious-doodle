/**
 * Binary Search Tree
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

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === val) return undefined;

        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    let find = false;
    while (!find && current) {
      if (current.value < val) {
        current = current.left;
      } else if (current.value > val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return null;

    return current;
  }
}

let bst = new BST();

bst.insert(50);
bst.insert(150);
bst.insert(5);
bst.insert(8);

console.log(bst);
