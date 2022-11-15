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

const input = require("fs").readFileSync("../input.txt").toString();

function solution(input) {
  let answer = "";
  let flag = false;
  const str = input.split("");

  const stack = new Stack();
  for (const data of str) {
    if (data === "<") {
      flag = true;
      while (!stack.empty()) {
        answer += stack.pop();
      }
    }

    if (data === " " && !flag) {
      while (!stack.empty()) {
        answer += stack.pop();
      }
      answer += " ";
    } else if (data === ">") {
      while (!stack.empty()) {
        answer += stack.pop();
      }
      answer += ">";
    } else {
      if (!flag) {
        stack.push(data);
      } else {
        answer += data;
      }
    }

    if (data === ">") {
      flag = false;
    }
  }
  while (!stack.empty()) {
    answer += stack.pop();
  }
  console.log(answer.replace(/\n/g, ""));
}
solution(input);
