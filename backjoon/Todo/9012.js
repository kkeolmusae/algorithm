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
}

let answer = "";
const count = Number(input[0]);

for (let idx = 1; idx <= count; idx++) {
  const stack = new Stack();
  const parentheses = input[idx].split("");
  try {
    for (const data of parentheses) {
      if (data === "(") stack.push(data);
      else if (data === ")") {
        const result = stack.pop();
        if (result === -1) {
          throw "NO";
        }
      }
    }
    if (stack.size()) {
      throw "NO";
    } else {
      answer += "YES\n";
    }
  } catch (err) {
    answer += "NO\n";
  }
}

console.log(answer);
