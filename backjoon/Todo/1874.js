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
}

let answer = "";
const [total, ...nums] = input;
const stack = new Stack();
let tempNumber = 1;

for (let i = 0; i < total; i++) {
  const number = nums[i]; // 들어온 값

  while (tempNumber <= number) {
    // 들어온 값이
    stack.push(tempNumber++);
    answer += "+\n";
  }

  const popedNumber = stack.pop();
  if (number != popedNumber) {
    answer = "NO";
    break;
  }

  answer += "-\n";
}

console.log(answer);
