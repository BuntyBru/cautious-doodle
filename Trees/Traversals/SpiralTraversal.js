/**
 * Level order traversal in spiral form
 * https://www.geeksforgeeks.org/level-order-traversal-in-spiral-form/
 *
 * Attaching the levels while doing the BFS
 */
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class bst {
  constructor(value) {
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

  bfs() {
    if (!this.root) return undefined;
    let queue = [];
    let newMap = new Map();

    this.spiralVal(this.root, 0, newMap);

    queue.push([this.root, 0]);

    while (queue.length > 0) {
      let node = queue.shift();

      if (node[0].left) {
        queue.push([node[0].left, node[1] + 1]);
        this.spiralVal(node[0].left, node[1] + 1, newMap);
      }

      if (node[0].right) {
        queue.push([node[0].right, node[1] + 1]);
        this.spiralVal(node[0].right, node[1] + 1, newMap);
      }
    }

    return newMap;
  }

  spiralVal(node, level, newMap) {
    if (newMap.get(level) == undefined) {
      newMap.set(level, [node.value]);
    } else {
      let t = newMap.get(level);
      t.push(node.value);
      newMap.set(level, t);
    }
  }
}

let tree = new bst();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(30);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(5);
tree.insert(50);

let answer = tree.bfs();
let ansArr = [];
for (let values of answer.keys()) {
  if (values % 2 !== 0) {
    ansArr = [...ansArr, ...answer.get(values)];
  } else {
    ansArr = [...ansArr, ...answer.get(values).reverse()];
  }
}
console.log("Answer", ansArr);
