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
 * 수열의 각 원소 Ai에 대해서 오등큰수 NGF(i)를 구하려고 한다.
 * Ai가 수열 A에서 등장한 횟수를 F(Ai)라고 했을 때,
 * Ai의 오등큰수는 오른쪽에 있으면서 수열 A에서 등장한 횟수가 F(Ai)보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다.
 * 그러한 수가 없는 경우에 오등큰수는 -1이다.
 * 예를 들어, A = [1, 1, 2, 3, 4, 2, 1]인 경우
 * F(1) = 3, F(2) = 2, F(3) = 1, F(4) = 1이다.
 * A1의 오른쪽에 있으면서 등장한 횟수가 3보다 큰 수는 없기 때문에, NGF(1) = -1이다.
 * A3의 경우에는 A7이 오른쪽에 있으면서 F(A3=2) < F(A7=1) 이기 때문에, NGF(3) = 1이다.
 * NGF(4) = 2, NGF(5) = 2, NGF(6) = 1 이다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let answer = "";
  const count = Number(input[0]);
  const arr = input[1].split(" ");

  const dic = {};
  for (const elem of arr) {
    if (dic[elem]) {
      dic[elem] = dic[elem] + 1;
    } else {
      dic[elem] = 1;
    }
  }
  const stack = new Stack();

  for (let idx = count - 1; idx >= 0; idx--) {
    const number = Number(arr[idx]);
    if (stack.empty()) {
      answer = "-1 " + answer;
      stack.push(number);
      continue;
    }

    let stackTop = stack.top();
    while (dic[stackTop] <= dic[number] && !stack.empty()) {
      stack.pop();
      stackTop = stack.top();
    }

    stack.push(number);
    answer = stackTop + " " + answer;
  }
  return answer.slice(0, -1);
}

console.log(solution(input));
