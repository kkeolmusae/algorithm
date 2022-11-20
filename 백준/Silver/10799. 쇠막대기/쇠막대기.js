const input = require("fs").readFileSync("/dev/stdin").toString();

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

function solution(input) {
  const pipe = input.split("");
  let answer = 0;
  const stack = new Stack();
  let prev = null; // 이전꺼 기억하기 위함.

  for (const elem of pipe) {
    if (elem === "(") {
      stack.push("(");
    } else if (elem === ")" && prev === "(") {
      // 레이저인 경우
      stack.pop();
      answer += stack.size();
    } else if (elem === ")" && prev === ")") {
      // 쇠막대기 끝인경우
      answer++;
      stack.pop();
    }
    prev = elem;
  }
  return answer;
}

console.log(solution(input));
