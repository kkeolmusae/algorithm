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

const input = require("fs").readFileSync("/dev/stdin").toString();

function solution(input) {
  let answer = "";
  const regCase = /^[A-Z]+$/; // 영문 대문자
  const stack = new Stack();

  for (const idx in input) {
    const elem = input[idx];

    if (regCase.test(elem)) {
      // 영문이면 일단 넣어
      answer += elem;
    } else if (elem === "(") {
      stack.push(elem);
    } else if (elem === ")") {
      // 닫는 괄호가 나오면 여는 괄호가 나올때까지 pop하고, 여는 괄호 pop
      while (!stack.empty() && stack.top() !== "(") {
        answer += stack.pop();
      }
      stack.pop();
    } else if (elem === "*" || elem === "/") {
      // *,/ 들어올때는 우선순위 같은 */를 처리해줘야함.
      while (!stack.empty() && (stack.top() === "*" || stack.top() === "/")) {
        answer += stack.pop();
      }
      stack.push(elem);
    } else if (elem === "+" || elem === "-") {
      // +랑 - 들어올때는 우선순위 높은 *,/랑 우선순위가 같은 +- 를 처리해줘야함.
      while (!stack.empty() && stack.top() !== "(") {
        answer += stack.pop();
      }
      stack.push(elem);
    }
  }

  // 나머지 처리
  while (!stack.empty()) answer += stack.pop();
  return answer;
}

console.log(solution(input));
