/*
How to efficiently implement k stacks in a single array?
https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/
For simplicity sake we are taking arrays are numbered from 0
*/
const nextIndexFiller = arrLength => {
  let arr = Array(arrLength).fill(-1);
  for (let i = 0; i < arrLength; i++) {
    arr[i] = i + 1;
  }
  arr[arrLength - 1] = -1;

  return arr;
};
class Nstack {
  constructor(numOfArray, arrayLength) {
    this.topOfStack = Array(numOfArray).fill(-1);
    this.stackData = Array(arrayLength).fill(0);
    this.nextIndex = nextIndexFiller(arrayLength);
    this.nextAvailable = 0;
  }

  push(arrNo, elem) {
    if (arrNo < 0 && arrNo >= this.topOfStack.length) return undefined;
    if (this.nextAvailable < 0) return "Stack Overflow";

    let index = this.nextAvailable;
    this.nextAvailable = this.nextIndex[index];
    this.stackData[index] = elem;
    this.nextIndex[index] = this.topOfStack[arrNo];
    this.topOfStack[arrNo] = index;
  }

  pop(arrNo) {
    if (
      (arrNo < 0 && arrNo >= this.topOfStack.length) ||
      this.topOfStack[arrNo] == -1
    )
      return undefined;

    let index = this.topOfStack[arrNo];
    let poppedItem = this.stackData[index];
    this.stackData[index] = 0;
    this.topOfStack[arrNo] = this.nextIndex[index];
    this.nextIndex[index] = this.nextAvailable;

    this.nextAvailable = index;

    return poppedItem;
  }
}

let nStack = new Nstack(2, 6);

nStack.push(0, 6);
nStack.push(0, 9);

nStack.push(1, 13);
nStack.push(1, 5);

console.log(nStack);

console.log(nStack.pop(0));

console.log(nStack);
