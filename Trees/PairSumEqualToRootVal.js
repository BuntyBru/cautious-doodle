/**
 * Find if there is a pair in root to a leaf path with sum equals to root’s data
 * https://www.geeksforgeeks.org/find-pair-root-leaf-path-sum-equals-roots-data/
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
      if (value === current.value) return this;
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

  dfsPreOrder() {
    if (!this.root) return undefined;

    let node = this.root;
    let data = [];
    let mapArr = new Map();
    let rootVal = this.root.value;

    function traverse(node) {
      mapArr.set(node.value, 1);
      if (mapArr.get(rootVal - node.value) !== undefined) {
        data.push([node.value, rootVal - node.value]);
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return data;
  }
}

let tree = new bst();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(2);
tree.insert(8);
tree.insert(20);
console.log(tree.dfsPreOrder());
