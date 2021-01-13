/**
 * Next Greater Element
 * https://www.geeksforgeeks.org/next-greater-element/
 */

class Node {
  constructor(val) {
    this.value = val;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      let head = newNode;
      this.head.next = temp;
    }

    this.length += 1;
  }

  pop() {
    let poppedNode = this.head;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return poppedNode.value;
  }

  top() {
    if (!this.head) return null;
    return this.head.value;
  }
}

//let arr = [11, 13, 21, 3];

let arr = [1, 3, 4, 20];
//[5,25,25,-1]
const nextElement = arr => {
  let st = new Stack();
  let ansArr = [];

  for (let i = 0; i < arr.length; i++) {
    st.push(arr[i]);
    j = i + 1;
    while (st.top() && j < arr.length) {
      if (st.top() < arr[j]) {
        ansArr.push(arr[j]);
        st.pop();
      } else {
        if (j == arr.length - 1) {
          ansArr.push(-1);
        }
        j += 1;
      }
    }
  }
  ansArr.push(-1);
  return ansArr;
};
console.log(arr);
console.log(nextElement(arr));
