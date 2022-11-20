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
    return Number(this.topNode.value);
  }
}
/**
 * 크기가 N인 수열 A = A1, A2, ..., AN이 있다.
 * 수열의 각 원소 Ai에 대해서 오큰수 NGE(i)를 구하려고 한다.
 * Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다.
 * 그러한 수가 없는 경우에 오큰수는 -1이다.
 *
 * 예를 들어, A = [3, 5, 2, 7]인 경우
 * NGE(1) = 5, NGE(2) = 7, NGE(3) = 7, NGE(4) = -1이다.
 *
 * A = [9, 5, 4, 8]인 경우에는
 * NGE(1) = -1, NGE(2) = 8, NGE(3) = 8, NGE(4) = -1이다.
 */

const input = require("fs").readFileSync("../input.txt").toString().split("\n");

function solution(input) {
  let answer = "";
  const count = Number(input[0]);
  const arr = input[1].split(" ");
  const stack = new Stack();

  for (let idx = count - 1; idx >= 0; idx--) {
    const number = Number(arr[idx]);
    if (stack.empty()) {
      answer = "-1 " + answer;
      stack.push(number);
      continue;
    }

    let stackTop = stack.top();
    while (stackTop <= number && !stack.empty()) {
      stack.pop();
      stackTop = stack.top();
    }

    stack.push(number);
    answer = stackTop + " " + answer;
  }
  return answer.slice(0, -1);
}

console.log(solution(input));
