/**
 * 첫째 줄에 피연산자의 개수(1 ≤ N ≤ 26) 가 주어진다.
 * 그리고 둘째 줄에는 후위 표기식이 주어진다.
 * (여기서 피연산자는 A~Z의 영대문자이며, A부터 순서대로 N개의 영대문자만이 사용되며, 길이는 100을 넘지 않는다)
 * 그리고 셋째 줄부터 N+2번째 줄까지는 각 피연산자에 대응하는 값이 주어진다.
 * 3번째 줄에는 A에 해당하는 값, 4번째 줄에는 B에 해당하는값 , 5번째 줄에는 C ...이 주어진다,
 * 그리고 피연산자에 대응 하는 값은 100보다 작거나 같은 자연수이다.
 * 후위 표기식을 앞에서부터 계산했을 때,
 * 식의 결과와 중간 결과가 -20억보다 크거나 같고, 20억보다 작거나 같은 입력만 주어진다.
 */

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

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let answer = "";
  let [count, arr, ...nums] = input;
  arr = arr.split("");
  const stack = new Stack();
  const pattern = /[a-z|A-Z|0-9|]/; //영어
  // const patternSpc = /[+-*\/]/; // 특수문자
  let temp = 0;
  const alphabet = {};

  for (let i = 0; i < count; i++) {
    alphabet[String.fromCharCode(i + 65)] = nums[i];
  }

  for (let idx = 0; idx < arr.length; idx++) {
    if (pattern.test(arr[idx])) {
      stack.push(arr[idx]);
    } else {
      let numA = stack.pop();
      let numB = stack.pop();
      numA = isNaN(numA) ? alphabet[numA] : numA;
      numB = isNaN(numB) ? alphabet[numB] : numB;

      const result = new Function(`return ${numB}${arr[idx]}${numA}`)();
      stack.push(result);
    }
  }

  answer = stack.pop();

  return answer.toFixed(2);
}

console.log(solution(input));