/**
 * Extracting the maximum value from the heaps
 *
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(x) {
    this.values.push(x);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) return;
      this.values[parentIndex] = element;
      this.values[idx] = parent;
      idx = parentIndex;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap == null && rightChild > element) ||
          (swap != null && rightChild > element)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap == null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extractMax() {
    const max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
console.log(heap.extractMax());
console.log("----");
console.log(heap);
console.log(heap.extractMax());
console.log("----");
console.log(heap);
console.log(heap.extractMax());
console.log("----");
console.log(heap);
console.log(heap.extractMax());
console.log("----");
console.log(heap);
console.log(heap.extractMax());
console.log("----");
