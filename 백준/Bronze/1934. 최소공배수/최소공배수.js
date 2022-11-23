/**
 * 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다.
 * 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다.
 * 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
 * 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function euclidean(numA, numB) {
  const result = numA % numB;
  if (result === 0) return numB;

  return euclidean(numB, result);
}

function solution(input) {
  let answer = "";
  const count = input[0];
  for (let i = 1; i <= count; i++) {
    const nums = input[i].split(" ");
    const numA = Math.max(nums[0], nums[1]);
    const numB = Math.min(nums[0], nums[1]);

    const gcd = euclidean(numA, numB); // 최대 공약수
    const lcm = (numA * numB) / gcd;

    answer += `${lcm}\n`;
  }

  return answer.slice(0, -1);
}

console.log(solution(input));
