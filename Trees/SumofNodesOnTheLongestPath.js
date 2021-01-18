/**
 * Sum of nodes on the longest path from root to leaf node
 * https://www.geeksforgeeks.org/sum-nodes-longest-path-root-leaf-node/
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
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
      }
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  utilityFunc(node, sum, len, maxElement) {
    if (!node) {
      if (maxElement.maxLen < len) {
        maxElement.maxLen = len;
        maxElement.maxSum = sum;
      } else if (maxElement.maxLen == len && maxElement.maxSum < sum) {
        maxElement.maxSum = sum;
      }
      console.log(maxElement);
      return;
    }
    this.utilityFunc(node.left, sum + node.value, len + 1, maxElement);
    this.utilityFunc(node.right, sum + node.value, len + 1, maxElement);
  }

  longestSum() {
    if (!this.root) return 0;
    let maxElement = {
      maxSum: 0,
      maxLen: 0,
    };
    this.utilityFunc(this.root, 0, 0, maxElement);

    return maxElement.maxSum;
  }
}

let tree = new Bst();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(30);
console.log("Longest Sum", tree.longestSum());
