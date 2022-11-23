/**
 * 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
 * 유클리드 호제법
 * 1. 큰 수를 작은 수로 나눈다.
 * 2. 나누는 수를 나머지로 계속 나눈다.
 * 3. 나머지가 0이 나오면 나누는 수가 최대공약수이다.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

function euclidean(numA, numB) {
  const result = numA % numB;
  if (result === 0) return numB;

  return euclidean(numB, result);
}
function solution(input) {
  const numA = Math.max(input[0], input[1]);
  const numB = Math.min(input[0], input[1]);

  const gcd = euclidean(numA, numB); // 최대 공약수
  const lcm = (numA * numB) / gcd;
  return `${gcd}\n${lcm}`;
}

console.log(solution(input));
