class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.empty()) return -1;

    const popNode = this.first;
    this.first = this.first.next;

    if (this.size() === 1) this.last = null;
    this.length--;

    return popNode.value;
  }
}

const [N, K] = require("fs").readFileSync("/dev/stdin").toString().split(" ");

function solution(N, K) {
  const queue = new Queue();
  let answer = [];
  let count = 0;
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }
  while (!queue.empty()) {
    count++;
    if (count === K) {
      answer.push(queue.pop());
      count = 0;
    } else {
      queue.push(queue.pop());
    }
  }
  return `<${answer.join(", ")}>`;
}
console.log(solution(N, Number(K)));
