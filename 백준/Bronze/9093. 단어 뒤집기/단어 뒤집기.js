const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.topNode = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      newNode.next = null;
      this.topNode = newNode;
    } else {
      newNode.next = this.topNode;
      this.topNode = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.length) return -1;

    const popedNode = this.topNode;
    this.topNode = popedNode.next;
    this.length--;
    return popedNode.value;
  }

  size() {
    return this.length;
  }

  empty() {
    if (!this.length) return 1;
    return 0;
  }

  top() {
    if (!this.length) return -1;
    return this.topNode.value;
  }
}

let answer = "";
const count = Number(input[0]);

const stack = new Stack();
for (let idx = 1; idx <= count; idx++) {
  const sentence = input[idx].split("");
  for (const elem of sentence) {
    if (elem !== " ") {
      stack.push(elem);
    } else {
      while (stack.length) {
        answer += stack.pop();
      }
      answer += " ";
    }
  }
  while (stack.length) {
    answer += stack.pop();
  }
  console.log(answer);
  answer = "";
}
