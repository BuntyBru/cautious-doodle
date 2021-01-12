/*
Infox to Postfix
https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/
*/

const prec = operator => {
  switch (operator) {
    case "^":
      return 3;
    case "*":
    case "/":
      return 2;
    case "+":
    case "-":
      return 1;
    default:
      return 0;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) return null;
    let temp = this.head;
    if (this.head == this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length -= 1;
    return temp.value;
  }

  top() {
    if (!this.head) return null;
    return this.head.value;
  }
}

let str = "a+b*(c^d-e)^(f+g*h)-i";
let opStack = new Stack();
let finalStr = "";

const infixToPostfix = () => {
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      finalStr += str[i];
    } else if (str[i] == "(") {
      opStack.push("(");
    } else if (str[i] == ")") {
      while (opStack.top() !== null && opStack.top() !== "(") {
        finalStr += opStack.pop();
      }
      if (opStack.top() == "(") {
        opStack.pop();
      }
    } else {
      while (opStack.top() != null && prec(str[i]) <= prec(opStack.top())) {
        finalStr += opStack.pop();
      }
      opStack.push(str[i]);
    }
  }

  while (opStack.top() != null) {
    finalStr += opStack.pop();
  }
};

infixToPostfix();

console.log(finalStr);
