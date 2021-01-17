/**
 * Diagonal Sum of Binary Tree
 * https://www.geeksforgeeks.org/diagonal-sum-binary-tree/
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

  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  diagonalSumUtility(node, depth, mapArr) {
    if (!node) return;
    if (mapArr.get(depth) == undefined) {
      mapArr.set(depth, node.value);
    } else {
      let arr = mapArr.get(depth);
      mapArr.set(depth, arr + node.value);
    }

    this.diagonalSumUtility(node.left, depth + 1, mapArr);
    this.diagonalSumUtility(node.right, depth, mapArr);
  }

  diagonalSum() {
    let mapArr = new Map();
    this.diagonalSumUtility(this.root, 0, mapArr);
    let sum = 0;
    for (let x of mapArr.values()) {
      sum += x;
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
console.log("Full tree", tree);
console.log("Sum of Diagonals", tree.diagonalSum());
