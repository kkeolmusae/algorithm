/**
 * push_front X: 정수 X를 덱의 앞에 넣는다.
 * push_back X: 정수 X를 덱의 뒤에 넣는다.
 * pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * size: 덱에 들어있는 정수의 개수를 출력한다.
 * empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
 * front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 * back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */

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

  pushFront(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const firstNode = this.first;
      newNode.next = firstNode;
      this.first = newNode;
    }
    this.length++;
  }

  // push_back
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

  popBack() {
    if (this.empty()) return -1;

    let tempNode = this.first;

    while (true) {
      const nextNode = tempNode.next;
      if (!nextNode) {
        this.first = null;
        this.last = null;
        this.length--;
        return tempNode.value;
      } else if (!nextNode.next) {
        this.last = tempNode;
        tempNode.next = null;
        this.length--;
        return nextNode.value;
      }
      tempNode = tempNode.next;
    }
  }

  // pop_front
  pop() {
    if (this.empty()) return -1;

    const popNode = this.first;
    this.first = this.first.next;

    if (this.size() === 1) this.last = null;
    this.length--;

    return popNode.value;
  }

  front() {
    if (this.empty()) return -1;

    return this.first.value;
  }

  back() {
    if (this.empty()) return -1;

    return this.last.value;
  }
}

const [count, ...cmds] = require("fs").readFileSync("../input.txt").toString().split("\n");

function solution(count, cmds) {
  const queue = new Queue();
  let answer = "";
  for (let idx = 0; idx < count; idx++) {
    const cmd = cmds[idx].split(" ")[0];
    const val = cmds[idx].split(" ")[1];

    if (cmd === "push_back" || cmd === "push_front") {
      if (cmd === "push_back") queue.push(val);
      else queue.pushFront(val);
    } else {
      if (cmd === "pop_front" || cmd === "pop_back") {
        if (cmd === "pop_front") answer += queue.pop();
        else answer += queue.popBack();
      } else if (cmd === "size") {
        answer += queue.size();
      } else if (cmd === "empty") {
        answer += queue.empty();
      } else if (cmd === "front") {
        answer += queue.front();
      } else if (cmd === "back") {
        answer += queue.back();
      }
      answer += "\n";
    }
  }
  return answer;
}
console.log(solution(count, cmds));
