const input = require("fs").readFileSync("../input.txt").toString().split("\n");

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
  const cmd = input[idx].split(" ")[0];
  const value = input[idx].split(" ")[1];
  if (cmd === "push") {
    stack.push(value);
  } else if (cmd === "top") {
    answer += stack.top();
    answer += "\n";
  } else if (cmd === "size") {
    answer += stack.size();
    answer += "\n";
  } else if (cmd === "empty") {
    answer += stack.empty();
    answer += "\n";
  } else if (cmd === "pop") {
    answer += stack.pop();
    answer += "\n";
  }
}
console.log(answer);
